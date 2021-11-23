ComponentsSlotMachineSpinTypesRegular = require('./regular');

class ComponentsSlotMachineSpinTypesDrop extends ComponentsSlotMachineSpinTypesRegular {
    constructor() {
        super()

        this.symbolsDropped = true;
    }

    spinHandler() {
        this.reelsMovedCounter = new Array(this.reelsCount).fill(this.rowsCount);

        const { start, stop } = this._config.dropTimings;
        this.symbolsDropped = false;

        if (!this.spinning) {
            setTimeout(() => this._startSpin(start.reelsDelay, start.rowsDelay), start.defaultDelay);
            return
        }

        this.symbolsDropped = true;
        this.spinning = false;

        setTimeout(() => this._startSpin(stop.reelsDelay, stop.rowsDelay), stop.defaultDelay);
    }

    _tweenReelHandler(reelIndex, rowsDelay) {
        this._tweenReel(reelIndex, rowsDelay);
    }

    _tweenReel(reelIndex, rowDelay) {
        let delay = rowDelay || 0;

        for(let i = 0; i < this.rowsCount; i++)
            this._tweenReelSymbols(reelIndex, delay);
    }

    _checkIfReelMoveDone(reelIndex) {
        this.reelsMovedCounter[reelIndex]--;

        if (this.reelsMovedCounter[reelIndex] === 0 && !this._newSymbolsDroping)
            return this._onReelStopCallback(reelIndex);
          
        this._onDropNewSymbolsOver()
    }

    _onReelStopCallback(reelIndex) {
        this._lastStoppedReelIndex = reelIndex;
        this._reelsMovingCount--;

        if (!this.symbolsDropped)
            this._moveReelSymbolsOnTop(reelIndex);

        if (this._reelsMovingCount === 0){

            if (!this.symbolsDropped){
                this._reelsMovingCount = this._config.reelsCount;
                this.spinHandler();  
            } else
                this._onSpinStopCallback();
        }
    }

    _moveReelSymbolsOnTop(reelIndex){
        for(let i = 0; i < this._symbols[reelIndex].length; i++)
            this._moveSymbolOnTop(reelIndex);
    }

}

module.exports = ComponentsSlotMachineSpinTypesDrop;