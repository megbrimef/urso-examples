class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'bottle', path: _imagePath + 'bottle.png'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                alignX: 'center',
                alignY: 'center',
                contents: [
                    {
                        type: Urso.types.objects.MASK,
                        rectangle: [-120, -200, 300, 900]
                    },
                    {
                        type: Urso.types.objects.IMAGE,
                        assetKey: 'bottle',
                        acnhorX: 0.5,
                        anchorY: 0.5,
                        x: -300,
                        scaleX: 3,
                        scaleY: 3
                    },
                ]
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
