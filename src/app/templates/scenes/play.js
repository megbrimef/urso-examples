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
                x: 300, 
                y: 500,
                alpha: 0
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 600, 
                y: 500,
                alpha: 0.5
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 900, 
                y: 500,
                alpha: 1
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
