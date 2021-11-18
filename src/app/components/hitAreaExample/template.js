class ComponentsHitAreaExampleTemplate {
    constructor() {

        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'exampleText',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                fontSize: 100,
                fill: 'white',
                text: 'press any hitArea below'
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'hitArea1',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                x: -475, y: 200,
                alpha: 1,
                width: 150,
                height: 150
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'hitArea2',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                x: -75, y: 200,
                alpha: 1,
                width: 150,
                height: 150
            },
            {
                type: Urso.types.objects.HITAREA,
                name: 'hitArea3',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                x: 325, y: 200,
                alpha: 1,
                width: 150,
                height: 150
            }
        ];
    }
}

module.exports = ComponentsHitAreaExampleTemplate;