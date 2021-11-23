class ComponentsWinFieldController extends Urso.BaseGame.Components.WinField.Controller {

    _formatWin(textObj, { currency, text }) {
        if (isNaN(Number(text))) {
            textObj.text = text;
            return;
        }

        textObj.text = text;
    };
}

module.exports = ComponentsWinFieldController;
