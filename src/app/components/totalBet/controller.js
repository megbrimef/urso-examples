class ComponentsTotalBetController extends Urso.BaseGame.Components.TotalBet.Controller {

    _formatTotalBet(textObj, { currency, amount }) {
        textObj.text = amount;
    };
}

module.exports = ComponentsTotalBetController;
