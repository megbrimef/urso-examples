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
                scaleX: 0.5,
                scaleY: 0.5
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 600, 
                y: 500,
                scaleX: 1,
                scaleY: 1
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 900, 
                y: 500,
                scaleX: 2,
                scaleY: 2
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
