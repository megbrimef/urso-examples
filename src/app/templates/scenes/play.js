class AppTemplatesScenesPlay {
    constructor() {
        this.styles = {};

        this.assets = [];

        this.objects = [
            {
                type: Urso.types.objects.COMPONENT,
                name: 'slotMachine',
                componentName: 'slotMachine',
                x: 382,
                width: 1155, height: 693,
                options: {id: 'basic'},
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'winLines'
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'stateText',
                alignX: 'center',
                y: 740,
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'buttons'
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'spin',
                width: 1920,
                height: 1080
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'stop',
                width: 1920,
                height: 1080
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
