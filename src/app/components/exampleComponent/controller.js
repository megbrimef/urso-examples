class ComponentsExampleComponentController extends Urso.Core.Components.Base.Controller {

    create(){
        let parent = this.common.findOne('^parentContainer');
        this._createTextObject(parent);
    }

    _createTextObject(parent){
        Urso.objects.create(
            {
                type: Urso.types.objects.TEXT,
                text: 'dynamicly created text',
                fontFamily: 'Arial',
                fontSize: 100,
                fill: '#ffffff',
                x: 700,
                y: 600
            }, parent)
    }
}

module.exports = ComponentsExampleComponentController;