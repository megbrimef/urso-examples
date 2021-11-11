class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {
    constructor(){
        super();
        this.counter = 0;
    }

    _buttonPressHandler({name}){
        if(name !== 'exampleButton')
            return

        let textObject;

        switch (this.counter) {
            case 0:
                textObject = this.common.find('.exampleText')[0];
                textObject.text = 'changed using find';
                this.counter++
                break;
            case 1:
                textObject = this.common.findOne('.exampleText');
                textObject.text = 'changed using findOne';
                this.counter++
                break;
            case 2:
                textObject = this.common.findAll('.exampleText')[0];
                textObject.text = 'changed using findAll';
                this.counter = 0
            default:
                break;
        }
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_BUTTON_PRESS, this._buttonPressHandler.bind(this));
    }
}

module.exports = ComponentsExampleComponentController;