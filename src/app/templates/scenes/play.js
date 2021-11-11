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
                x: 400, 
                y: 500,
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: '70%', 
                y: '50%',
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
