class ComponentsExampleComponentTemplate {
    constructor() {

        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'hoover', path: _imagePath + 'button_hoover.png' },
            { type: Urso.types.assets.IMAGE, key: 'out', path: _imagePath + 'button_out.png' },
            { type: Urso.types.assets.IMAGE, key: 'pressed', path: _imagePath + 'button_pressed.png' }
        ]

        this.objects = [
            {
                type: Urso.types.objects.BUTTON,
                name: 'exampleButton',
                x: 300,
                y: 500,
                anchorX: 0.5,
                anchorY: 0.5,
                scaleX: 2,
                scaleY: 2,
                buttonFrames: {
                    over: 'hoover',
                    out: 'out',
                    pressed: 'pressed',
                    disabled: 'hoover'
                },
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'parent1',
                contents: [
                    {
                        type: Urso.types.objects.CONTAINER,
                        id: 'parent2',
                        contents: [
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'exampleText',
                                text: 'exampleComponent text',
                                fontFamily: 'Arial',
                                fontSize: 100,
                                fill: '#ffffff',
                                x: 600,
                                y: 450
                            }
                        ]
                    }
                ]
            }
        ];
    }
}

module.exports = ComponentsExampleComponentTemplate;
