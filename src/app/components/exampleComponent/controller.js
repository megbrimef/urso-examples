class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {
    constructor(){
        super();
        this.buttonPressed = false;
        this.config = this.getInstance('Config');
    }

    _buttonPressHandler({name}){
        if(name !== 'exampleButton')
            return

        let textObject = this.common.findOne('^exampleText');
        textObject.text = this.buttonPressed ? 'example' : this.config.getText();
        this.buttonPressed = !this.buttonPressed;
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_BUTTON_PRESS, this._buttonPressHandler.bind(this));
    }
}

module.exports = ComponentsExampleComponentController;