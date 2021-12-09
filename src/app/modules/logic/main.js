class ModulesLogicMain extends Urso.SlotBase.Modules.Logic.Main {

    _hitAreaHandler = ({ name }) => {
        if(name === 'spin') {
            this.emit('components.slotMachine.spinCommand');
        }
    }

    _subscribeOnce() {
        super._subscribeOnce();
        this.addListener(Urso.events.MODULES_OBJECTS_HIT_AREA_PRESS, this._hitAreaHandler, true);
    };
};

module.exports = ModulesLogicMain;
