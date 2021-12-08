class ComponentsSlotMachineService extends Urso.SlotBase.Components.SlotMachine.Service{
    
    constructor() {
        super();
        this._view = this.getInstance('Cascade');
    }
}

module.exports = ComponentsSlotMachineService;
