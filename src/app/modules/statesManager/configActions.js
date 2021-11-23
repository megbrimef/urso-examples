class ModulesStatesManagerConfigActions extends Urso.BaseGame.Modules.StatesManager.ConfigActions {
    constructor() {
        super();

        this.contents.destroyWinSymbolsAndDropNew = {
            name: 'destroyWinSymbolsAndDropNew',
            events: {
                onStart: 'components.slotMachine.cascade.start',
                toComplete: 'components.slotMachine.cascade.finished'
            },
            isTerminable: false
        };
    }
}

module.exports = ModulesStatesManagerConfigActions;
