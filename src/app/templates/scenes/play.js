class AppTemplatesScenesPlay {
    constructor() {
        this.styles = {};

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'bg', path: 'images/background/basic.png' },
        ];

        this.objects = [
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'loader'
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bg',
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'slotMachine',
                componentName: 'slotMachine',
                x: 320, y: 160,
                width: 1270, height: 660,
                options: {id: 'basic'}
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'autoSpin',
            },
            {
                type: Urso.types.objects.GROUP,
                groupName: 'uiGroup'
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'winLines'
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'winCounter'
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'ui'
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
