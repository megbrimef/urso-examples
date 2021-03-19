class AppTemplatesScenesPlay {
    constructor() {
        const _spinePath = 'assets/spines/';

        this.assets = [
            { type: Urso.types.assets.SPINE, key: 'coin', path: _spinePath + 'coin.json' }
        ];

        this.objects = [
            {
                type: Urso.types.objects.SPINE,
                name: 'coinPro1',
                assetKey: 'coin',
                x: 300, y: 300,
                scaleX: 1.5, scaleY: 1.5
            },
            {
                type: Urso.types.objects.SPINE,
                name: 'coinPro2',
                assetKey: 'coin',
                x: 1500, y: 500,
                scaleX: 1.5, scaleY: 1.5,
                defaultAnimation: {
                    name: 'animation'
                }
            },
            {
                type: Urso.types.objects.SPINE,
                name: 'coinPro3',
                assetKey: 'coin',
                x: 750, y: 750,
                scaleX: 1.5, scaleY: 1.5,
                defaultAnimation: {
                    name: 'animation',
                    loop: true
                }
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
