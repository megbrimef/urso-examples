class AppModulesAssetsModelsImage extends Urso.Core.Modules.Assets.Models.Image {
    constructor(params) {
        super(params);

        this.preloadGPU = true;
    }
}

module.exports = AppModulesAssetsModelsImage;