class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'bottle', path: _imagePath + 'bottle.png'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'exampleContainer',
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'bottle',
                        fontFamily: 'Arial',
                        fontSize: 100,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 180
                    },
                    {
                        type: Urso.types.objects.IMAGE,
                        assetKey: 'bottle',
                        anchorX: 0.5,
                        anchorY: 0.5,
                    }
                ],
                alignX: 'center',
                alignY: 'center',
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
