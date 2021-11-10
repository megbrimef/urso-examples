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
                x: 500, y: 500,
                text: '1 2 3',
                fontSize: 100
            },

        ];
    };

};

module.exports = AppTemplatesScenesPlay;
