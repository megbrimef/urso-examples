class ComponentsWinLinesController extends Urso.Core.Components.StateDriven.Controller {

    configActions = {
        setDefaultStateTextAction: {
            run: (finishClbk) => this._runSetStateAction('idle')(finishClbk),
        },
        setEmptyStateTextAction: {
            run: (finishClbk) => this._runSetStateAction('empty')(finishClbk),
        },
        setSpinStateTextAction: {
            run: (finishClbk) => this._runSetStateAction('spin')(finishClbk),
        },
        setWinStateTextAction: {
            run: (finishClbk) => this._runSetStateAction('win')(finishClbk),
        },
        setFinishingStateTextAction: {
            run: () => {},
            terminate: () => this._runFinishingStateText()
        }
    };

    set _state (text) {
        this.common.findOne('^text').text = text;
    };

    _getStateOrDefault(state) {
        const statesTexts = {
            empty: '',
            idle: 'CLICK/TAP ANYWHERE TO START SPIN',
            spin: 'CLICK/TAP ANYWHERE TO FORCE FAST SPIN',
            win: 'CLICK/TAP ANYWHERE TO STOP WIN ANIMATION'
        };

        const textState = typeof statesTexts[state] !== 'undefined' ? state : 'idle';

        return statesTexts[textState];
    };

    _runFinishingStateText() {
        this._state = this._getStateOrDefault('empty');
        this.callFinish('setFinishingStateTextAction');
    }

    _runSetStateAction(state){
        return (finishClbk) => {
            this._state = this._getStateOrDefault(state);
            finishClbk();
        }
    }
    _terminateSetSpinText() {
        this._runSetStateAction('empty')();
        this.callFinish('setSpinStateTextAction');
    }
}

module.exports = ComponentsWinLinesController;