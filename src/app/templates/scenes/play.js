class AppTemplatesScenesPlay {
    constructor() {

        this.objects = [
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'exampleComponent'
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'parent1',
                contents: [
                    {
                        type: Urso.types.objects.CONTAINER,
                        id: 'parent2',
                        contents: [
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'exampleText',
                                text: 'example',
                                fontFamily: 'Arial',
                                fontSize: 100,
                                fill: '#ffffff',
                                x: 600,
                                y: 450
                            }
                        ]
                    }
                ]
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
