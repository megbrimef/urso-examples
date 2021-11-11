class ComponentsTextExampleController extends Urso.Core.Components.Base.Controller {

    create(){
        this.text = this.common.findOne('^exampleText')
    }

    _changeTextPosition({x, y}){
        this.text.x = x;
        this.text.y = y;
    }

    _subscribeOnce() {
        this.addListener('change.text.position', this._changeTextPosition.bind(this));
    }
}

module.exports = ComponentsTextExampleController;