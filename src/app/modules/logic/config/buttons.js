class ModulesLogicConfigButtons extends Urso.BaseGame.Modules.Logic.Config.Buttons {

    setButtonStates() {
        const superResult = super.setButtonStates();

        superResult.betPlus = {
            default: {
                'title': '',
                'callback': () => {
                    this.emit('components.bet.switch', { type: 'one' });
                },
                'enabled': true,
                'visible': true,
                'frames': {
                    overFrame: 2,
                    outFrame: 1,
                    downFrame: 0,
                    upFrame: 1,
                    disableFrame: 3
                }
            },
        };

        superResult.betMinus = {
            default: {
                'title': '',
                'callback': () => {
                    this.emit('components.bet.switch', { type: 'minus' });
                },
                'enabled': true,
                'visible': true,
                'frames': {
                    overFrame: 2,
                    outFrame: 1,
                    downFrame: 0,
                    upFrame: 1,
                    disableFrame: 3
                }
            },
        };


        return superResult;
    };

    setEventsCfg() {
        const superResult = super.setEventsCfg();
        superResult.betPlus = [];
        superResult.betMinus = [];
        return superResult;
    };

};

module.exports = ModulesLogicConfigButtons;
