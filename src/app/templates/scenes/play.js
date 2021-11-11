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
                alignX: 'center',
                alignY: 'center'
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: 100, 
                y: 100,
                alignX: 'left',
                alignY: 'top'
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bottle',
                x: -300, 
                y: -300,
                alignX: 'right',
                alignY: 'bottom'
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
