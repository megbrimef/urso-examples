//FIXME: need implement symbols pool (don't destroy symbols, push it to pool and get them from pool)
class ComponentsSlotMachineSpinTypesRegular {

    constructor() {
        this._parent = null;
        this._config = null;
        this._service = null;

        this._symbolWidth = null;
        this._symbolHeight = null;

        this._symbols = [];

        this._remainingBlurSymbolsCount = 0;

        this._spinning = false;
        this._spinNewSymbolsReceived = false;

        this._spinNewSymbols = null;
        this._lastStoppedReelIndex = -1;
        this._timeScale = 1;

        this._intrigue = false;
        this._intrigueStartsFrom = 0;

        this._allReelsStarted = false;

        this.startSymbolsCreated = false;
        this._pool = null;

        this._newSymbolsDroping = false;
        this._dropingSymbolsCount = 0;
        this._reelsMovingCount = 0
    }

    _getPoolName(id) {
        return `ComponentsSlotMachineService.pool.${id}`;
    }

    setConfig(config) {
        this._config = config;
    }

    setService(service) {
        this._service = service;
    }

    create({ id, startSymbols }) {
        this._setup();
        this._createSymbolsPool(id);
        this.setSpinNewSymbols(startSymbols)
        this._createAllSymbols();
        this.startSymbolsCreated = true;
    }

    _createSymbolsPool(id) {
        this._pool = this._getPool(id);
    }

    setSpinNewSymbols(symbolsConfigs) {
        this._spinNewSymbolsReceived = true;
        this._spinNewSymbols = symbolsConfigs;
    }

    _createAllSymbols() {
        for (let reelIndex = 0; reelIndex < this.reelsCount; reelIndex++) {
            !this._symbols[reelIndex] && this._symbols.push([]);

            for (let row = this.rowsCount + this.borderSymbolsCount * 2; row > 0; row--) {
                this._addSymbolOnTop(reelIndex);
            }
        }
    }

    _checkSymbolExists({ reel, row }) {
        return this._symbols[reel] && this._symbols[reel][row];
    }

    //position: {reel:2, row:1}
    symbolTryAnimate(position) {
        if (!this._checkSymbolExists(position)) {
            return Urso.logger.error(`Symbol on position ${JSON.stringify(position)} was not found`);
        }

        this._symbolAnimate(position);
    }

    _symbolAnimate({ reel, row }) {
        this._symbols[reel][row + this.borderSymbolsCount].data.animate();
    }

    symbolTryStopAnimation(position) {
        if (!this._checkSymbolExists(position)) {
            return Urso.logger.error(`Symbol on position ${JSON.stringify(position)} was not found`);
        }

        this._symbolStopAnimation(position);
    }

    _symbolStopAnimation({ reel, row }) {
        this._symbols[reel][row].data.stopAnimation();
    }

    symbolStopAllAnimationHandler() {
        for (let reelIndex = 0; reelIndex < this.reelsCount; reelIndex++) {
            for (let i = 0; i < this._symbols[reelIndex].length; i++) {
                const symbol = this._symbols[reelIndex][i];
                symbol.data.stopAnimation();
            }
        }
    }

    commandSpeedUp() {
        this._speedUpCommanded = true;

        if (this._allReelsStarted || this._newSymbolsDroping)
            this._speedUpReels()
    }

    _speedUpReels() {
        this._speedUpCommanded = false;

        this._timeScale = this._config.speedUpReelsFactor;

        for (let reelIndex = 0; reelIndex < this.reelsCount; reelIndex++) {
            this._symbols[reelIndex].forEach(symbol => {
                symbol.data.setTimeScale(this._timeScale);
            })
        }
    }

    //FIXME: Intrigue must have reelIndexFrom and reelIndexTo //DONE
    intrigue(reelIndexFrom, reelIndexTo) {
        reelIndexTo = reelIndexTo || this.reelsCount - 1;

        if (this._intrigue)
            return false;

        this._intrigue = true;
        this._intrigueStartsFrom = reelIndexFrom;

        //add new symbols to the _remainingBlurSymbolsCount
        for (let i = reelIndexFrom; i < reelIndexTo; i++)
            this._remainingBlurSymbolsCount[i] += this._config.intrigueAdditionalSymbols;
    }

    //FIXME: use js object destructuring {} = this._config.get()
    _setup() {
        this.mask = this.common.findOne('^slotMachineMask');
        this.reelsCount = this._config.reelsCount;
        this.rowsCount = this._config.rowsCount;
        this.borderSymbolsCount = this._config.borderSymbolsCount;
        this._reelsMovingCount = this._config.reelsCount;
        this.spinStartInterval = this._config.spinStartInterval;
        this._parent = Urso.findOne('^slotMachine'); //todo refactoring to this._object ?!
        this._symbolWidth = this._parent.width / this.reelsCount;
        this._symbolHeight = this._parent.height / this.rowsCount;
        this._spinType = this._config.spinType;
        //FIXME: spinType sets twice (first time in the service) //DONE

        //check int values
        if (this._symbolWidth !== ~~this._symbolWidth || this._symbolHeight !== ~~this._symbolHeight)
            Urso.logger.error('ComponentsSlotMachineView dimension error. Use int width/height values.')

        this._resetSpinState();
    }

    _getSymbolsConfig(symbolData) {
        return {
            key: 'symbol',
            template: symbolData,
            parent: this._parent
        }
    }

    _poolConstructorFunction(key, symbolConfig) {
        let symbol = this.getInstance('Symbol', symbolConfig);
        return symbol;
    }

    _poolResetFunction(symbol) {
        symbol.reset();
        symbol.removeFromScene();
        // this._parent.removeChild(symbol.object);
        return symbol;
    }

    _getPool(id) {
        const poolName = this._getPoolName(id);
        const pool = Urso.localData.get(poolName);

        if (pool)
            return pool;

        const newPool = new Urso.Game.Lib.ObjectPool(this._poolConstructorFunction.bind(this), this._poolResetFunction.bind(this));
        Urso.localData.set(poolName, newPool);

        return newPool;
    }

    //////////////////spin

    _resetSpinState() {
        this._timeScale = 1;
        this._intrigue = false;
        this._intrigueStartsFrom = 0;
        this._lastStoppedReelIndex = -1;
        this._spinning = true;
        this._remainingBlurSymbolsCount = [...this._config.blurSymbolsCount];
        this._spinNewSymbolsReceived = false;
        this._spinNewSymbols = null;
        this.winSymbols = [];
        this._allReelsStarted = false;
        this._reelsMovingCount = this.reelsCount;
    }

    spinHandler() {
        this._startSpin();
    }

    _setMask() {
        this.common.object._baseObject.mask = this.mask._baseObject;
        this.mask.visible = true;
        this._changeBorderSymbolsVisible(true);
    }

    _removeMask() {
        this.common.object._baseObject.mask = null;
        this.mask.visible = false;
        this._changeBorderSymbolsVisible(false);
    }

    _changeBorderSymbolsVisible(isVisible){
        for(let i = 0; i < this.borderSymbolsCount; i++){
            for(let reel of this._symbols){
                reel[i].data._texture.visible = isVisible;
                reel[reel.length - 1 - i].data._texture.visible = isVisible;
            }  
        }
    }

    _startSpin(reelsSpinDelay, rowsSpinDelay) {
        Urso.localData.set('spinning', true);

        this._setMask();

        if (this.spinning)
            return

        this.spinning = true;
        let reelsDelay = reelsSpinDelay || this.spinStartInterval;
        let rowsDelay = rowsSpinDelay || 0;

        let delay;

        this._speedUpCommanded = false; // FIX: QuickSpin fires speedUp action on the end of spin.

        for (let reelIndex = 0; reelIndex < this.reelsCount; reelIndex++) {
            delay = reelIndex * reelsDelay;
            setTimeout(() => this._tweenReelHandler(reelIndex, rowsDelay, true), delay);
        }

        setTimeout(() => {
            this._allReelsStarted = true;

            if (this._speedUpCommanded)
                this._speedUpReels();

        }, delay);

        //TODO: CHECK FOR EVENT // move emit to controller
        this.emit('components.slotMachine.spinStarted');
    }

    _tweenReelHandler(reelIndex, rowsDelay, isSpinStart) {
        if (this._checkCanTweenReel(reelIndex) && this._checkNeedAddSymbolOnTop(reelIndex)) {
            !isSpinStart && this._moveSymbolOnTop(reelIndex);
            this._tweenReel(reelIndex, rowsDelay);
            return
        }

        this._remainingBlurSymbolsCount[reelIndex]++
        !isSpinStart && this._moveSymbolOnTop(reelIndex);
        this._onReelStopCallback(reelIndex);
    }

    _tweenReel(reelIndex, rowDelay) {
        let delay = rowDelay || 0;
        this._tweenReelSymbols(reelIndex, delay);
    }

    _tweenReelSymbols(reelIndex, rowDelay) {
        let reelLength = this._symbols[reelIndex].length;
        let delay;

        for (let i = reelLength - 1; i >= 0; i--) {
            let symbol = this._symbols[reelIndex][i];
            let rowIndex = reelLength - i;

            delay = rowIndex * rowDelay;
            this._moveSymbol(symbol, delay, reelIndex);
        }
    }

    _moveSymbol(symbol, delay, reelIndex) {
        let startDelay = delay || 0;
        let duration = this._getOneSymbolTweenDuration();

        let timeScale = this._getTweenTimeScale(reelIndex);
        let moveTo = this._symbolHeight;

        symbol.data.setTimeScale(timeScale);
        symbol.data.moveTween(moveTo, duration, startDelay, this._onSymbolMoveOver.bind(this, symbol, reelIndex));
    }

    _onSymbolMoveOver(symbol, reelIndex) {
        let symbolIndex = this._symbols[reelIndex].indexOf(symbol);

        if(this._newSymbolsDroping)
            return this._onDropingSymbolMoveOver(reelIndex, symbolIndex)
        
        this._checkIfReelMoveDone(reelIndex, symbolIndex);
    }

    _onDropingSymbolMoveOver(){
        this._dropingSymbolsCount--;
        this._dropingSymbolsCount === 0 && this._onDropNewSymbolsOver();
    }

    _moveSymbolOnTop(reelIndex, symbol) {
        if (!symbol) {
            symbol = this._symbols[reelIndex].pop();
        } else {
            let symbolIndex = this._symbols[reelIndex].indexOf(symbol);
            this._symbols[reelIndex].splice(symbolIndex, 1);
        }

        this._symbols[reelIndex].unshift(symbol);
        symbol.data.reset();
        this._addSymbolOnTop(reelIndex);
    }

    _checkIfReelMoveDone(reelIndex, rowIndex) {
        if (rowIndex === 0 && !this._newSymbolsDroping)
            return this._tweenReelHandler(reelIndex);
    }

    _onDropNewSymbolsOver() {
        if(!this._config.isCascade && this.symbolsDropped)
            this._removeMask();

        this._newSymbolsDroping = false;
        this.emit('components.slotMachine.cascade.finished', null, this._config.spinCompleteDelay);
    }

    _getTweenTimeScale(reelIndex) {
        let timeScale = this._timeScale;
        //FIXME: Move check to separate method like 'canStartIntigueOnReel' //DONE
        if (this._canStartIntigueOnReel(reelIndex))
            timeScale = timeScale * this._config.intrigueSpeedReelsFactor;

        return timeScale;
    }

    _canStartIntigueOnReel(reelIndex) {
        return this._intrigue && reelIndex >= this._intrigueStartsFrom && reelIndex === (this._lastStoppedReelIndex + 1)
    }

    _onReelStopCallback(reelIndex) {
        this._lastStoppedReelIndex = reelIndex;
        this._reelsMovingCount--;

        if (this._reelsMovingCount === 0)
            this._onSpinStopCallback();
    }

    _onSpinStopCallback() {
        //reset symbols tweens
        this.spinning = false;
        this._resetSpinState();
        Urso.localData.set('spinning', false);

        if (!this._config.isCascade && !this.spinning)
            this._removeMask();

        // TODO: ADDED FOR DEMO  //TODO move emit to controller
        this.emit('components.slotMachine.spinComplete', null, this._config.spinCompleteDelay);
    }

    _checkCanTweenReel(reelIndex) {
        let result = false;

        if (this._spinNewSymbols && this._spinNewSymbols[reelIndex].length - this.borderSymbolsCount > 0) {
            result = true;
        } else {
            this._checkNeedUpdateRemainingBlurSymbolsCount(reelIndex);
            result = this._remainingBlurSymbolsCount[reelIndex] > 0;
        }

        return result;
    }

    _getOneSymbolTweenDuration() {
        return this._symbolHeight / this._config.symbolSpeed;
    }

    _getSymbolData(reelIndex) {
        if (this._remainingBlurSymbolsCount[reelIndex] > 0 && this.startSymbolsCreated) {
            this._remainingBlurSymbolsCount[reelIndex]--;
            return this._service._getSymbol();
        } else if (this._spinNewSymbols[reelIndex].length > 0)
            return this._spinNewSymbols[reelIndex].pop();
    }

    _getSymbol(reelIndex) {
        let symbolData = this._getSymbolData(reelIndex);
        let symbolConfig = this._getSymbolsConfig(symbolData);
        let symbol;

        if (this._symbols[reelIndex].length === this.rowsCount + this.borderSymbolsCount * 2)
            symbol = this._symbols[reelIndex][0]
        else {
            let key = symbolConfig.key;
            symbol = this._pool.getElement(key, symbolConfig);
            this._symbols[reelIndex].unshift(symbol);
        }

        symbol.data.setSymbolsConfig(symbolConfig, true);

        return symbol
    }
    // REFACTOR
    _addSymbolOnTop(reelIndex) {
        let symbol = this._getSymbol(reelIndex);

        let x = (+reelIndex + 0.5) * this._symbolWidth;

        let minY = this._symbolHeight * 0.5 - this._symbolHeight;
        let y;

        if(this.startSymbolsCreated){
            let topSymbol = this._symbols[reelIndex].find(symbol => symbol.data._texture.y === minY)
            y = topSymbol ? this._symbols[reelIndex][1].data.getPosition().y - this._symbolHeight : minY;
        }else if(!this._symbols[reelIndex][1]){
            y = minY + this._symbolHeight * (this.rowsCount + this.borderSymbolsCount);
        }else
            y = this._symbols[reelIndex][1].data.getPosition().y - this._symbolHeight;

        symbol.data.setPosition(x, y);

        return symbol;
    }

    _checkNeedAddSymbolOnTop(reelIndex) {
        return this._remainingBlurSymbolsCount[reelIndex] > 0 || this._spinNewSymbols[reelIndex].length > 0
    }

    _checkNeedUpdateRemainingBlurSymbolsCount(reelIndex) {
        if (!this._spinNewSymbolsReceived && this._remainingBlurSymbolsCount[reelIndex] === 0)
            //we need add a new cout for all reels
            for (let i = 0; i < this._remainingBlurSymbolsCount.length; i++)
                this._remainingBlurSymbolsCount[i]++
    }

    destroyWinSymbols(symbolsPositions) {
        this._newSymbolsDroping = true;

        let winSymbols = this._getAllWinSymbols(symbolsPositions);

        Object.keys(winSymbols).forEach(reelIndex => {
            for (let symbol of winSymbols[reelIndex]) {
                this._remainingBlurSymbolsCount[reelIndex]++
                this._moveSymbolOnTop(reelIndex, symbol);
            }
        })

        setTimeout(() => this._dropNewSymbols(), 10);
    }

    _getAllWinSymbols(symbolsPositions) {
        let winSymbols = {};

        symbolsPositions.forEach(position => {
            let reelIndex = +position[0];
            let rowIndex = +position[1] + this.borderSymbolsCount;
            let symbol = this._symbols[reelIndex][rowIndex];

            if (!winSymbols[reelIndex])
                winSymbols[reelIndex] = [];

            winSymbols[reelIndex].push(symbol);
        })

        return winSymbols;
    }
    // REFACTOR
    _getSymbolMoveTimes(symbol, rowIndex) {
        let offset = this._symbolHeight * (this.rowsCount - rowIndex);
        let targetPosition = (this.rowsCount + 0.5) * this._symbolHeight - offset;
        let { y } = symbol.data.getPosition();
        let diff = y - targetPosition;
        let timesToMove = diff < 0 ? -diff / this._symbolHeight - this.borderSymbolsCount : 0;
        return timesToMove;
    }

    _dropNewSymbols() {
        let delay;

        for (let reelIndex = 0; reelIndex < this.reelsCount; reelIndex++) {
            delay = reelIndex * this.spinStartInterval;

            for (let rowIndex = 0; rowIndex < this._symbols[reelIndex].length - this.borderSymbolsCount; rowIndex++) {
                let symbol = this._symbols[reelIndex][rowIndex];

                if (!symbol)
                    continue

                let times = this._getSymbolMoveTimes(symbol, rowIndex);

                if (times > 0) {
                    this._dropingSymbolsCount++

                    for (let i = 0; i < times; i++)
                        this._moveSymbol(symbol, delay, reelIndex);
                }
            }
        }

    }
}

module.exports = ComponentsSlotMachineSpinTypesRegular;
