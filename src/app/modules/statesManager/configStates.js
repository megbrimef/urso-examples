class ModulesStatesManagerConfigStates extends Urso.SlotBase.Modules.StatesManager.ConfigStates {
    constructor() {
        super();

        this.contents = {
            IDLE: {
                all: [
                    { action: 'startSpin' }
                ]
            },

            SPIN_START: {
                all: [
                    { action: 'serverSpinRequest' },
                    { action: 'slotMachineSpinStart' },
                ]
            },

            SPIN_FINISHING: {
                race: [
                    { action: 'regularSpin' },
                    { action: 'quickSpin' }
                ]
            },

            WINLINES_ANIMATE_ALL: {
                all: [
                    { action: 'showWinlinesAnimationAll' }
                ]
            },

            WINLINES_ANIMATE_BY_ONE: { action: 'showWinlinesAnimationByOne' },

            DESTROY_WIN_SYMBOLS_AND_DROP_NEW: {
                race: [
                    { action: 'destroyWinSymbolsAndDropNew' }
                ]
            },
        };
    };
};


module.exports = ModulesStatesManagerConfigStates;
