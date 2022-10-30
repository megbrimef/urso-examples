class ComponentsWinLinesController extends Urso.Core.Components.Base.Controller {
    set _state (text) {
        this.common.findOne('^text').text = text;
    };

    _getStateOrDefault(state) {
        const statesTexts = {
            IDLE: 'CLICK/TAP ANYWHERE TO START SPIN',
            SHOW_WIN: 'CLICK/TAP ANYWHERE TO FORCE FAST SPIN'
        };

        const textState = typeof statesTexts[state] !== 'undefined' ? state : '';

        return statesTexts[textState];
    };

    _stateChangedHandler = (state) => {
        this._state = this._getStateOrDefault(state)
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_STATES_MANAGER_STATE_CHANGE, this._stateChangedHandler);
    }
}

module.exports = ComponentsWinLinesController;
