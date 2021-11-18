class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.objects = [
            {
                type: Urso.types.objects.GRAPHICS,
                name: 'graphics rectangle example',
                alignX: 'center',
                alignY: 'center',
                x: -500,
                y: -200,
                figure: {
                    rectangle: [0, 0, 200, 200],
                    fillColor: 0xFFFFFF
                }
            },
            {
                type: Urso.types.objects.GRAPHICS,
                name: 'graphics polygon example',
                alignX: 'center',
                alignY: 'center',
                figure: {
                    polygon: [
                        0, -100, 
                        200, -300,
                        400, -300,
                        600, -100,
                        400, 100,
                        200, 100,
                        0, -100
                    ],
                    fillColor: 0x0000FFF
                }
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
