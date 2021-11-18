class ComponentsExampleComponentTemplate {
    constructor() {

        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'hoover', path: _imagePath + 'button_hoover.png' },
            { type: Urso.types.assets.IMAGE, key: 'out', path: _imagePath + 'button_out.png' },
            { type: Urso.types.assets.IMAGE, key: 'pressed', path: _imagePath + 'button_pressed.png' },
            { type: Urso.types.assets.IMAGE, key: 'disable', path: _imagePath + 'button_disable.png' }
        ]

        this.objects = [
            {
                type: Urso.types.objects.BUTTON,
                name: 'enabled',
                alignX: 'center',
                alignY:'center',
                x: -300,
                anchorX: 0.5,
                anchorY: 0.5,
                scaleX: 2,
                scaleY: 2,
                buttonFrames: {
                    over: 'hoover',
                    out: 'out',
                    pressed: 'pressed',
                    disabled: 'disable'
                },
            },
            {
                type: Urso.types.objects.BUTTON,
                name: 'disabled',
                alignX: 'center',
                alignY:'center',
                x: 300,
                anchorX: 0.5,
                anchorY: 0.5,
                scaleX: 2,
                scaleY: 2,
                buttonFrames: {
                    over: 'hoover',
                    out: 'out',
                    pressed: 'pressed',
                    disabled: 'disable'
                },
            },
        ];
    }
}

module.exports = ComponentsExampleComponentTemplate;
