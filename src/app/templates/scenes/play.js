class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'Hello World',
                text: 'Some test text !',
                fontFamily: 'Arial',
                fontSize: 100,
                fill: '#ffffff',
                x: 500,
                y: 500
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
