class ModulesStatesManagerConfigStates extends Urso.SlotBase.Modules.StatesManager.ConfigStates {
    constructor() {
        super();
        this.contents = {
            RESET_UI: {
                all: [
                    { action: 'setDefaultStateTextAction' }
                ]
            },

            IDLE: { 
                all: [
                    { action: 'waitingForInteractionAction' }
                ]
            },

            START_SPIN: {
                sequence: [
                    { action: 'setEmptyStateTextAction' },
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
                            { action: 'fastSpinAction' }
                        ]
                    },
                    { action: 'setEmptyStateTextAction' }
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

            WINLINES_ANIMATE_BY_ONE: {
                all: [
                    { action: 'setWinStateTextAction' },
                    {
                        race: [
                            { action: 'showWinlinesAnimationByOneAction' },
                            { action: 'stopWinlinesAnimationAction'}
                        ]
                    }
                ]   
            }
        };
    };
};


module.exports = ModulesStatesManagerConfigStates;
