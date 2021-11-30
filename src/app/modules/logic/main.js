class ModulesLogicMain extends Urso.SlotBase.Modules.Logic.Main {

    _hitAreaHandler = ({ name }) => {
        if(name === 'spin') {
            Urso.observer.fire('components.slotMachine.spinCommand');
        }
    }

    _spinStartedHandler = () => Urso.observer.fire('components.stateText.setState', 'spin');
    _speedUpReelsHandler = () => Urso.observer.fire('components.stateText.setState', 'fastSpin');
    _winlinesAnimateAllStartHandler = () => Urso.observer.fire('components.stateText.setState', 'win');
    _winlinesAnimateByOneFinishedHandler = () => Urso.observer.fire('components.stateText.setState', 'idle');
    
    _spinCompleteHandler = () => {
        const slotWin = Urso.localData.get('slotMachine.spinStages.0.slotWin');
        if(!slotWin) {
            Urso.observer.fire('components.stateText.setState', 'idle');
        }
    }

    _subscribeOnce() {
        super._subscribeOnce();
        this.addListener(Urso.events.MODULES_OBJECTS_HIT_AREA_PRESS, this._hitAreaHandler, true);
        this.addListener('components.slotMachine.spinStarted', this._spinStartedHandler, true);
        this.addListener('components.slotMachine.speedUpReels', this._speedUpReelsHandler, true);
        this.addListener('components.slotMachine.spinComplete', this._spinCompleteHandler, true);
        this.addListener('components.winlines.animateAll.start', this._winlinesAnimateAllStartHandler, true);
        this.addListener('components.winlines.animateByOne.finished', this._winlinesAnimateByOneFinishedHandler, true);
    };
};

module.exports = ModulesLogicMain;
