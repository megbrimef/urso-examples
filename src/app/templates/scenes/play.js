class AppTemplatesScenesPlay {
    constructor() {
        const _atlasPath = 'assets/atlases/';

        this.assets = [
            { type: Urso.types.assets.ATLAS, key: 'atlas', path: _atlasPath + 'bottle.json'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'atlas',
                filenameKey: "bottle.png",
                x: 500, y: 500,
                scaleX: 3,
                scaleY: 3
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
