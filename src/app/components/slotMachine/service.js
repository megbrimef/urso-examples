class ComponentsSlotMachineService {

    constructor() {
        //FIXME: spinType maybe better to set in tempate? (if there will be more than one slotMachine) // DONE

    }

    create({ id }) {
        this._symbolsConfig = this.getInstance('SymbolsConfig');
        this._config = this.getInstance('Config').get(id);
        let spinType = Urso.helper.capitaliseFirstLetter(this._config.spinType);
        this._view = this.getInstance(spinType);

        this.borderSymbolsCount = this._config.borderSymbolsCount;
        this.totalRows = this._config.rowsCount + this.borderSymbolsCount * 2;

        Urso.localData.set('components.slotMachine.isCascade', this._config.isCascade);
        let startSymbols = this._getInitialSymbols();

        this._setConfig();
        this._setService();
        this._view.create({ id, startSymbols });
    }

    _setService() {
        this._view.setService(this);
    }

    _setConfig() {
        this._view.setConfig(this._config);
    }

    startSpin() {
        this._view.spinHandler();
    }

    setSpinNewSymbols(symbolsKeys) {
        let symbolsConfigs = this._getSymbolsConfigs(symbolsKeys);
        this._view.setSpinNewSymbols(symbolsConfigs);
    }

    symbolAnimate(position) {
        this._view.symbolTryAnimate(position);
    }

    symbolStopAnimation(position) {
        this._view.symbolTryStopAnimation(position);
    }

    speedUpReels() {
        this._view.commandSpeedUp();
    }

    intrigue(reelIndexFrom) {
        this._view.intrigue(reelIndexFrom);
    }

    //FIXME: Server sends initial symbols in auth request
    //FIXME: If wasn't found than getRandom
    _getInitialSymbols() {
        let initialSymbols = false; //TODO get from local data? setter ?

        if (!initialSymbols)
            initialSymbols = this._getRandomSymbols();

        return initialSymbols;
    }

    _getRandomSymbols() {
        return this._getSymbolsConfigs();
    }

    _getSymbolsConfigs(symbolsKeys) {
        let symbols = [];

        for (let reel = 0; reel < this._config.reelsCount; reel++) {
            let reelArray = [];

            for (let row = 0; row < this.totalRows; row++) {
                //FIXME: move to separate method // DONE
                this._addSymbol(reel, row, symbolsKeys, reelArray)
            }

            symbols.push(reelArray);
        }

        return symbols;
    };

    _addSymbol(reel, row, symbolsKeys, array){
        let symbolKey;

        if(row < this.borderSymbolsCount || row === this.totalRows - 1 && this.borderSymbolsCount > 0 || !symbolsKeys || !symbolsKeys[reel][row - this.borderSymbolsCount])
            symbolKey = null;
        else
            symbolKey = symbolsKeys[reel][row - this.borderSymbolsCount]

        array.push(this._getSymbol(symbolKey));
    }

    _getSymbol(symbolKey) {
        let symbols = this._symbolsConfig.getSymbols();

        //check can we use symbolsBlurKeys
        if (!symbolKey) {
            let symbolsBlurKeys = this._config.symbolsBlurKeys;

            if (symbolsBlurKeys.length > 0) {
                let symbolBlurIndex = Urso.math.getRandomIntBetween(0, symbolsBlurKeys.length - 1);
                symbolKey = symbolsBlurKeys[symbolBlurIndex];
            }
        }

        if (symbolKey)
            return symbols.find((element) => (element.key === symbolKey));

        //no symbolKey, no symbolsBlurKeys - return random from config
        let symbolIndex = Urso.math.getRandomIntBetween(0, symbols.length - 1);
        return symbols[symbolIndex];
    };

    symbolStopAllAnimationHandler() {
        this._view.symbolStopAllAnimationHandler();
    }

    //FIXME: bad usage of spinStages. There can be many of them.
    //FIXME: may be send a flag to symbol to destroy animation after finish

    _destroyWinSymbols() {
        const slotMachineData = Urso.localData.get('slotMachine');
        const firstStageSlotWin = slotMachineData.spinStages[0].slotWin;
        const lineWinAmounts = firstStageSlotWin.lineWinAmounts;
        let wonSymbolsArray = [];

        lineWinAmounts.forEach(line => {

            line.wonSymbols.forEach(symbol => {
                wonSymbolsArray.push(symbol);
            })

        })

        wonSymbolsArray = wonSymbolsArray.filter((symbol, index, self) =>
            index === self.findIndex((t) => (
                t[0] === symbol[0] && t[1] === symbol[1]
            ))
        )

        this._view.destroyWinSymbols(wonSymbolsArray);
    }

    destroyWinSymbolsHandler() {
        this._view.symbolStopAllAnimationHandler();
        //FIXME: Need to remove setTimeout
        setTimeout(() => this._destroyWinSymbols(), 20);
    }

}

module.exports = ComponentsSlotMachineService;
