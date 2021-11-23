class ComponentsBetController extends Urso.BaseGame.Components.Bet.Controller {

    constructor() {
        super();
        this.MINUS = 'minus';
    }

    _getPrevVal(value, bets) {
        let currentIndex = bets.indexOf(value);

        if (bets[--currentIndex])
            return bets[currentIndex];

        return bets[bets.length - 1];
    }

    _switchHandler({ type = this.ONE } = {}) {
        const { value, bets } = Urso.localData.get('bets');

        let nextVal;

        switch (type) {
            case this.MINUS:
                nextVal = this._getPrevVal(value, bets);
                break;

            default:
                nextVal = this._getNextValue(value, bets);
                break;
        }

        Urso.localData.set('bets.value', nextVal);
        this._setHandler();
    };
}

module.exports = ComponentsBetController;
