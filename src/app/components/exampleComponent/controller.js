class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {
    constructor(){
        super();
        this.buttonPressed = false
    }

    _buttonPressHandler({name}){
        if(name !== 'exampleButton')
            return

        let textObject = Urso.find('^parent1 #parent2 .exampleText')[0];
        textObject.text = this.buttonPressed ? 'example' : 'changed with Urso.find()';
        this.buttonPressed = !this.buttonPressed 
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_BUTTON_PRESS, this._buttonPressHandler.bind(this));
    }
}

module.exports = ComponentsExampleComponentController;