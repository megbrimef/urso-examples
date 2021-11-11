class ComponentsButtonExampleController extends Urso.Core.Components.Base.Controller {

    _buttonPressHandler({name}){
        if(name !== 'exampleButton')
            return

        let x = Urso.math.getRandomIntBetween(500, 1000);
        let y = Urso.math.getRandomIntBetween(100, 1000);
        this.emit('change.text.position', {x, y})
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_BUTTON_PRESS, this._buttonPressHandler.bind(this));
    }
}

module.exports = ComponentsButtonExampleController;