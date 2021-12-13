class ModulesStatesManagerConfigStates extends Urso.SlotBase.Modules.StatesManager.ConfigStates {
    constructor() {
        super();
        this.contents = {
            IDLE: {
                all: [
                    { action: 'setDefaultStateTextAction' },
                    { action: 'hideStopButtonAction' },
                    { action: 'showSpinButtonAction' },
                    {
                        all: [
                            {
                                race: [
                                    { action: 'waitingForInteractionAction' },
                                    { action: 'showWinlinesAnimationByOneAction' },
                                    { action: 'stopAllSymbolsAnimationAction' }
                                ]
                            }
                        ]
                    }
                ]
            },

            START_ROUND: {
                sequence: [
                    { action: 'setEmptyStateTextAction' },
                    { action: 'disableUiButtonsAction' },
                    { action: 'hideSpinButtonAction' },
                    { action: 'showStopButtonAction' },
                    { action: 'regularSpinStartAction' },
                    { action: 'serverSpinRequestAction' },
                    { action: 'updateSlotMachineDataAction' }
                ]
            },

            FINISH_SPIN: {
                sequence: [
                    { action: 'setSpinStateTextAction' },
                    {
                        race: [
                            { action: 'finishingSpinAction' },
                            { action: 'fastSpinAction' },
                            { action: 'setFinishingStateTextAction' }
                        ]
                    }
                ]
            },

            SHOW_WIN: {
                all: [
                    { action: 'showWinlinesAnimationAllAction' }
                ]
            },

            FINISH_ROUND: {
                sequence: [
                    { action: 'serverBalanceRequestAction' }
                ]
            }
        };
    };
};


module.exports = ModulesStatesManagerConfigStates;
