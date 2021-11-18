class ComponentsHitAreaExampleController extends Urso.Core.Components.Base.Controller {
    constructor(){
        super();
        this.textObject = null;
    }

    create(){
        this.textObject = this.common.findOne('^exampleText');
    }
    
    hitAreaHandler({name}){
        switch (name) {
            case 'hitArea1':
                this.textObject.text = 'left'
                break;
            case 'hitArea2':
                this.textObject.text = 'center'
                break;
            case 'hitArea3':
                this.textObject.text = 'right'
                break;
            default:
                break;
        }
    }

    _subscribeOnce() {
        this.addListener(Urso.events.MODULES_OBJECTS_HIT_AREA_PRESS, this.hitAreaHandler.bind(this));
    }
}

module.exports = ComponentsHitAreaExampleController;