class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {

    create(){
        this.disabledButton = this.common.findOne('^disabled');
        this.disabledButton.disable();
    }

}

module.exports = ComponentsExampleComponentController;