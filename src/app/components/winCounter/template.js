class ComponentsWinCounterTemplate {
    constructor() {
        const _uiPath = 'assets/fonts/bitmap/';

        this.assets = [
            { type: Urso.types.assets.BITMAPFONT, key: 'counter', path: `${_uiPath}counter_font.fnt` }
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'winCounterContainer',
                visible: true,
                x: 1624 / 2,
                y: 750 / 2,
                contents: [
                    {
                        type: Urso.types.objects.BITMAPTEXT,
                        name: 'counterText',
                        fontName: 'counter',
                        text: '',
                        anchorX: 0.5,
                        anchorY: 0.5
                    }
                ]
            }
        ];
    };

};

module.exports = ComponentsWinCounterTemplate;