class ModulesLogicMain extends Urso.SlotBase.Modules.Logic.Main {

    _hitAreaHandler = ({ name }) => {
        if(name === 'spin') {
            this.emit('components.slotMachine.spinCommand');
        }
    }

    _setTextState = (state) => this.emit('components.stateText.setState', state);
    _spinStartedHandler = () => this._setTextState('spin');
    _speedUpReelsHandler = () => this._setTextState('fastSpin');
    
    _winlinesAnimateAllStartHandler = () => this._setTextState('win');
    
    _slotMachineDropStartHandler = () => this._setTextState('drop');
    _slotMachineDropFinihedHandler = () => this._setTextState('idle');
    
    _spinCompleteHandler = () => {
        const slotWin = Urso.localData.get('slotMachine.spinStages.0.slotWin');
        if(!slotWin) {
            this._setTextState('idle');
        }
    }


    _subscribeOnce() {
        super._subscribeOnce();
        this.addListener(Urso.events.MODULES_OBJECTS_HIT_AREA_PRESS, this._hitAreaHandler, true);
        this.addListener('components.slotMachine.spinStarted', this._spinStartedHandler, true);
        this.addListener('components.slotMachine.speedUpReels', this._speedUpReelsHandler, true);
        this.addListener('components.slotMachine.spinComplete', this._spinCompleteHandler, true);
        this.addListener('components.winlines.animateAll.start', this._winlinesAnimateAllStartHandler, true);
        
        this.addListener('components.slotMachine.drop.start', this._slotMachineDropStartHandler, true);
        this.addListener('components.slotMachine.drop.finished', this._slotMachineDropFinihedHandler, true);
    };
};

module.exports = ModulesLogicMain;
