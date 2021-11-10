class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.objects = [
            {
                type: Urso.types.objects.GRAPHICS,
                name: 'graphics rectangle example',
                figure: {
                    rectangle: [200, 200, 200, 200],
                    fillColor: 0xFFFFFF
                }
            },
            {
                type: Urso.types.objects.GRAPHICS,
                name: 'graphics polygon example',
                figure: {
                    polygon: [
                        500, 400, 
                        700, 200,
                        900, 200,
                        1100, 400,
                        900, 600,
                        700, 600,
                        500, 400
                    ],
                    fillColor: 0x0000FFF
                }
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
