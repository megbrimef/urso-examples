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
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                scaleX: 3,
                scaleY: 3
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
