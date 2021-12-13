class ModulesStatesManagerConfigStates extends Urso.Core.Modules.StatesManager.ConfigStates {
    constructor() {
        super();

        this.contents = {
            IDLE: {
                all: [
                    { action: 'enableUiButtonsAction' },
                    { action: 'hideStopButtonAction' },
                    { action: 'showSpinButtonAction' },
                    { action: 'showWinAmountTextAction' },
                    {
                        race: [                        
                            { action: 'autospinAction' },
                            { action: 'autospinCheckAction' },
                            { action: 'waitingForInteractionAction' },
                            { action: 'showWinlinesAnimationByOneAction' },
                            { action: 'stopAllSymbolsAnimationAction' }
                        ]
                    }
                ]
            },

            RESET_WIN_STATE: {
                all: [
                    { action: 'resetWinTextAction' }
                ]
            },

            START_SPIN: {
                sequence: [
                    { action: 'disableUiButtonsAction' },
                    { action: 'hideSpinButtonAction' },
                    { action: 'showStopButtonAction' },
                    { action: 'balanceMakeBetAction' },
                    { action: 'regularSpinStartAction' },
                    { action: 'serverSpinRequestAction' },
                    { action: 'updateSlotMachineDataAction' }
                ]
            },

            FINISH_SPIN: {
                race: [
                    { action: 'finishingSpinAction' },
                    { action: 'fastSpinAction' }
                ]
            },

            SHOW_WIN: {
                all: [
                    { action: 'showWinTextAction' },
                    { action: 'showWinlinesAnimationAllAction' },
                    {
                        race: [
                            { action: 'finishCounterAction' },
                            { action: 'showWinCounterAction' }
                        ]
                    }
                ]
            },

            FINISH_ROUND: {
                sequence: [
                    { action: 'serverBalanceRequestAction' }
                ]
            }
        };
    };

    get() {
        return this.contents;
    };

};

module.exports = ModulesStatesManagerConfigStates;
