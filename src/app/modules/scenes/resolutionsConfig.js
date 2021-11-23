class ModulesScenesResolutionsConfig extends Urso.Core.Modules.Scenes.ResolutionsConfig {
    constructor() {
        super();
        this._orientations = ['landscape'];

        this.contents = [
            {
                "name": 'default',
                "width": 1624,
                "height": 750,
                "orientation": 'landscape',
                "adaptive": false
            }
        ];
    }
}

module.exports = ModulesScenesResolutionsConfig;
