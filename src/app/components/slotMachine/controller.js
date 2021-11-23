class ComponentsSlotMachineController extends Urso.Core.Components.Base.Controller {

    constructor(options) {
        super(options);

        this._service = this.getInstance('Service');
        this._spin = this._spin.bind(this);
        this.options = options;
        this._setSpinSymbolsHandler = this._setSpinSymbolsHandler.bind(this);
        this._symbolAnimateHandler = this._symbolAnimateHandler.bind(this);
        this._stopSymbolAnimateHandler = this._stopSymbolAnimateHandler.bind(this);
        this._speedUpReelsHandler = this._speedUpReelsHandler.bind(this);
        this._intrigueHandler = this._intrigueHandler.bind(this);
        this._symbolStopAllAnimationHandler = this._symbolStopAllAnimationHandler.bind(this);

        this.tween = this.getInstance('Tween');
    }

    create() {
        this._service.create(this.options);
    }

    update(){
        this.tween.update();
    }

    _spin() {
        this._service.startSpin();
    }

    _setSpinNewSymbols(symbols) {
        this._service.setSpinNewSymbols(symbols);
    }

    _setSpinSymbolsHandler() {
        const spinSymbols = Urso.localData.get('slotMachine.spinStages.0.spinResult.rows');
        const col = this.transpose(spinSymbols);
        this._setSpinNewSymbols(col);
    }

    //position: {reel:2, row:1}
    _symbolAnimateHandler(position) {
        this._service.symbolAnimate(position);
    }

    //position: {reel:2, row:1}
    _stopSymbolAnimateHandler(position) {
        this._service.symbolStopAnimation(position);
    }

    // FIXME: Move to helper
    // TODO: MOVE TO HELPER, make new naming and use from transport
    transpose(matrix) {
        return Object.keys(matrix[0])
            .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber].toString()));
    }

    _speedUpReelsHandler() {
        this._service.speedUpReels();
    }

    /**
     * set intrigue to spinning reels
     * @param {Number} reelIndexFrom 
     */
    _intrigueHandler(reelIndexFrom) {
        this._service.intrigue(reelIndexFrom);
    }

    // _getWinFramePosition(position){
    //     this._service.getWinFramePosition(position);
    // }


    _symbolStopAllAnimationHandler(){
        this._service.symbolStopAllAnimationHandler();
    }

    _destroyWinSymbolsHandler(){
        this._service.destroyWinSymbolsHandler();
    }

    _subscribeOnce() {
        this.addListener('components.slotMachine.spinStart', this._spin);
        this.addListener('components.slotMachine.setSpinSymbols', this._setSpinSymbolsHandler);
        this.addListener('components.slotMachine.symbolAnimate', this._symbolAnimateHandler);
        this.addListener('components.slotMachine.symbolAnimateAllStop', this._symbolStopAllAnimationHandler);
        this.addListener('components.slotMachine.stopSymbolAnimate', this._stopSymbolAnimateHandler);
        this.addListener('components.slotMachine.speedUpReels', this._speedUpReelsHandler);
        this.addListener('components.slotMachine.intrigue', this._intrigueHandler);
        this.addListener('components.slotMachine.spinCommand', this._symbolStopAllAnimationHandler);
        //FIXME: rename event // done
        this.addListener('components.slotMachine.cascade.start', this._destroyWinSymbolsHandler.bind(this), true);
    };

}

module.exports = ComponentsSlotMachineController;
