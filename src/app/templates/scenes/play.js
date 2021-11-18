class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'bottle', path: _imagePath + 'bottle.png'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                anchorX: 0.5,
                anchorY: 0.5,
                alignX: 'center',
                alignY: 'center',
                scaleX: 3,
                scaleY: 3
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
