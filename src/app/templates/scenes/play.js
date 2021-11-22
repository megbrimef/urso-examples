class AppTemplatesScenesPlay {
    constructor() {
        const _spinePath = 'assets/spines/';

        this.assets = [
            { type: Urso.types.assets.SPINE, key: 'coin', path: _spinePath + 'coin.json' }
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'noAnimationContainer',
                x: 300, y: 300,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'no animation',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 280
                    },
                    {
                        type: Urso.types.objects.SPINE,
                        name: 'coinPro1',
                        assetKey: 'coin',
                        scaleX: 1.5, scaleY: 1.5
                    },
                ],
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'animatedOnceContainer',
                x: 1600, y: 300,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'animated once',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 280
                    },
                    {
                        type: Urso.types.objects.SPINE,
                        name: 'coinPro2',
                        assetKey: 'coin',
                        scaleX: 1.5, scaleY: 1.5,
                        animation: {
                            name: 'animation'
                        }
                    },
                ]
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'onLoopContainer',
                x: 1000, y: 600,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'animation on loop',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 280
                    },
                    {
                        type: Urso.types.objects.SPINE,
                        name: 'coinPro3',
                        assetKey: 'coin',
                        scaleX: 1.5, scaleY: 1.5,
                        animation: {
                            name: 'animation',
                            loop: true
                        }
                    }
                ]
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
