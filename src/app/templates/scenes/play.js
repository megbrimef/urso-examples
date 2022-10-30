class AppTemplatesScenesPlay {
    constructor() {
        this.assets = [];

        this.objects = [
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'loader',
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'autoSpin',
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'ui',
            },
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
                type: Urso.types.objects.HITAREA,
                action: () => Urso.observer.fire('modules.logic.ui.interact.done'),
                class: 'skipButton',
                width: 1920,
                height: 1080
            },
            {
                type: Urso.types.objects.HITAREA,
                action: () => Urso.observer.fire('modules.logic.ui.interact.done'),
                class: 'spinButton',
                width: 1920,
                height: 1080
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
