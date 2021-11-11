class ComponentsTextExampleTemplate {
    constructor() {

        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'hoover', path: _imagePath + 'button_hoover.png' },
            { type: Urso.types.assets.IMAGE, key: 'out', path: _imagePath + 'button_out.png' },
            { type: Urso.types.assets.IMAGE, key: 'pressed', path: _imagePath + 'button_pressed.png' }
        ]

        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'exampleText',
                text: 'exampleComponent text',
                fontFamily: 'Arial',
                fontSize: 100,
                fill: '#ffffff',
                x: 700,
                y: 600
            }
        ];
    }
}

module.exports = ComponentsTextExampleTemplate;
