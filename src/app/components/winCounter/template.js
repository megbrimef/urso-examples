class ComponentsWinCounterTemplate {
    constructor() {

        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'counterText',
                text: '',
                fontSize: 200,
                alpha: 0,
                fontFamily: 'julee',
                fill: '#FFB431',
                stroke: '#6F0308',
                strokeThickness: 15,
                fontWeight: 'bold',
                anchorX: 0.5,
                anchorY: 0.5,
                x: 1000, y: 500,
                wordWrapWidth: 440,
                visible: true,
                scaleX: 0.2,
                scaleY: 0.2
            }
        ];
    }
}

module.exports = ComponentsWinCounterTemplate;