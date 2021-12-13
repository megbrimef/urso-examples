class ModulesStatesManagerConfigStates extends Urso.SlotBase.Modules.StatesManager.ConfigStates {
    constructor() {
        super();
        this.contents = {
            IDLE: {
                all: [
                    { action: 'setDefaultStateTextAction' },
                    { action: 'hideStopButtonAction' },
                    { action: 'showSpinButtonAction' },
                    { action: 'waitingForInteractionAction' }
                ]
            },

            START_ROUND: {
                sequence: [
                    { action: 'setEmptyStateTextAction' },
                    { action: 'disableUiButtonsAction' },
                    { action: 'hideSpinButtonAction' },
                    { action: 'showStopButtonAction' },
                    { action: 'balanceMakeBetAction' },
                    { action: 'regularSpinStartAction' },
                    { action: 'serverSpinRequestAction' },
                    { action: 'updateSlotMachineDataAction' },
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

            DROP: {
                sequence: [
                    { action: 'setEmptyStateTextAction' },
                    { action: 'dropAction'},
                    { action: 'regularSpinStartAction' },
                    { action: 'serverSpinRequestAction' },
                    { action: 'updateSlotMachineDataAction' },
                    { action: 'finishingSpinAction' }
                ],
                nextState: ['SHOW_WIN']
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
