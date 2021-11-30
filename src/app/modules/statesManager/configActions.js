class ModulesStatesManagerConfigActions extends Urso.SlotBase.Modules.StatesManager.ConfigActions {
    constructor() {
        super();

        this.contents.destroyWinSymbolsAndDropNew = {
            name: 'destroyWinSymbolsAndDropNew',
            events: {
                onStart: 'components.slotMachine.drop.start',
                toComplete: 'components.slotMachine.drop.finished'
            },
            isTerminable: false
        };
    }
}

module.exports = ModulesStatesManagerConfigActions;
