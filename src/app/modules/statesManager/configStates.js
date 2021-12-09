class ModulesStatesManagerConfigStates extends Urso.SlotBase.Modules.StatesManager.ConfigStates {
    constructor() {
        super();
        this.contents = {
            RESET_UI: {
                all: []
            },

            IDLE: { 
                all: [
                    { action: 'waitingForInteractionAction' }
                ]
            },

            START_SPIN: {
                sequence: [
                    { action: 'regularSpinStartAction' },
                    { action: 'serverSpinRequestAction' },
                    { action: 'updateSlotMachineDataAction' }
                ]
            },

            FINISH_SPIN: { 
                sequence: [
                    { 
                        race: [
                            { action: 'finishingSpinAction' },
                            { action: 'fastSpinAction' }
                        ]
                    }
                ]
            },

            SHOW_WIN: {
                all: [
                    { action: 'showWinlinesAnimationAllAction' }
                ]
            },

            WINLINES_ANIMATE_BY_ONE: {
                all: [
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
