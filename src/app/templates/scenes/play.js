class AppTemplatesScenesPlay {
    constructor() {
        const _fontPath = 'assets/fonts/';

        this.assets = [
            { type: Urso.types.assets.BITMAPFONT, key: 'exampleFont', path: _fontPath + 'exampleFont.fnt'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.BITMAPTEXT,
                fontName: 'exampleFont',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                text: '1 2 3',
                fontSize: 100
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
