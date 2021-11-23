class ComponentsHitAreaExampleTemplate {
    constructor() {

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                x: -500, y: 200,
                contents: [
                    {
                        type: Urso.types.objects.HITAREA,
                        name: 'hitArea1',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        x: -140,
                        y: -40,
                        width: 300,
                        height: 100
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        name: 'hitAreaText_1',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        fontSize: 60,
                        fill: 'white',
                        text: 'press left'
                    },
                ]
            },
            {
                type: Urso.types.objects.CONTAINER,
                x: 0, y: 200,
                contents: [
                    {
                        type: Urso.types.objects.HITAREA,
                        name: 'hitArea2',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        x: -170,
                        y: -40,
                        width: 350,
                        height: 100
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        name: 'hitAreaText_2',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        fontSize: 60,
                        fill: 'white',
                        text: 'press center'
                    },
                ]
            },
            {
                type: Urso.types.objects.CONTAINER,
                x: 500, y: 200,
                contents: [
                    {
                        type: Urso.types.objects.HITAREA,
                        name: 'hitArea3',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        x: -140,
                        y: -40,
                        width: 300,
                        height: 100
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        name: 'hitAreaText_3',
                        alignX: 'center',
                        alignY: 'center',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        fontSize: 60,
                        fill: 'white',
                        text: 'press right'
                    },
                ]
            },
            {
                type: Urso.types.objects.TEXT,
                name: 'exampleText',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                fontSize: 100,
                y: -100,
                fill: 'white',
                text: 'press any hitArea below'
            },
        ];
    }
}

module.exports = ComponentsHitAreaExampleTemplate;