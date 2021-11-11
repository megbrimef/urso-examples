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
                x: 700, 
                y: 200,
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 700, 
                y: 500,
                anchorX: 0.5,
                anchorY: 0.5
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 700, 
                y: 800,
                anchorX: 1,
                anchorY: 1
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
