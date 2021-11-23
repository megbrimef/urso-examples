class ComponentsBalanceController extends Urso.BaseGame.Components.Balance.Controller {

    _formatBalance(textObj, { currency, totalAmount }) {
        textObj.text = Number(totalAmount).toFixed(2);
    };
}

module.exports = ComponentsBalanceController;
