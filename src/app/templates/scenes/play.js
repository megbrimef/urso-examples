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
                options: {id: 'cascade'},
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'winLinesCom',
                componentName: 'winLines'
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'stateTextCom',
                componentName: 'stateText',
                alignX: 'center',
                y: 740,
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'spin',
                width: 1920,
                height: 1080
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
