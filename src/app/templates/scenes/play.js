class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'Hello World container',
                contents: [
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
                ],
                x: 200,
                y: 200
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
