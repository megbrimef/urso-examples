class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {

    create(){
        this.text = this.common.findOne('^exampleText')
    }

    _buttonPressHandler({name}){
        if(name !== 'exampleButton')
            return

        this.text.x = Urso.math.getRandomIntBetween(0, 500);
        this.text.y = Urso.math.getRandomIntBetween(-500, 500);
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_BUTTON_PRESS, this._buttonPressHandler.bind(this));
    }
}

module.exports = ComponentsExampleComponentController;