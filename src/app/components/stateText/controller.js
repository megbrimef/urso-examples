class ComponentsWinLinesController extends Urso.Core.Components.Base.Controller {

    create = () => {
        this._state = this._getStateOrDefault();
    };

    set _state (text) {
        this.common.findOne('^text').text = text;
    };

    _getStateOrDefault = (state) => {
        const statesTexts = {
            idle: 'CLICK/TAP ANYWHERE TO START SPIN',
            spin: 'CLICK/TAP ANYWHERE TO FORCE FAST SPIN',
            fastSpin: 'WAITING SPIN TO FINISH',
            win: 'CLICK/TAP ANYWHERE TO STOP WIN ANIMATION',
            drop: 'DROPPING NEW SYMBOLS'
        };

        return statesTexts[state] || statesTexts.idle;
    };

    _changeStateHandler = (state) => this._state = this._getStateOrDefault(state);

    _subscribeOnce(){
        this.addListener('components.stateText.setState', this._changeStateHandler);
    };
}

module.exports = ComponentsWinLinesController;
