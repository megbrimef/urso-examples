class ModulesStatesManagerConfigStates extends Urso.BaseGame.Modules.StatesManager.ConfigStates {
    constructor() {
        super();

        this.contents = {
            IDLE: {
                all: [
                    { action: 'startSpin' },
                    { action: 'startAutospin' }
                ]
            },

            SPIN_START: {
                all: [
                    { action: 'resetWinField' },
                    { action: 'balanceMakeBet' },
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
                    { action: 'counterUpdate' },
                    { action: 'showWinlinesAnimationAll' }
                ]
            },

            WINLINES_ANIMATE_BY_ONE: { action: 'showWinlinesAnimationByOne' },

            DESTROY_WIN_SYMBOLS_AND_DROP_NEW: {
                race: [
                    { action: 'destroyWinSymbolsAndDropNew' },
                    { action: 'quickSpin' }
                ]
            },

            UPDATE_WIN: {
                race: [
                    { action: 'balanceReceived' },
                ]
            }
        };
    };
};


module.exports = ModulesStatesManagerConfigStates;
