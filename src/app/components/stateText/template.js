class ComponentsStateTextTemplate {
    constructor() {
        this.styles = {
            '.yellow': {
                fontSize: 60,
                fill: '#ffff00',
                fontFamily: 'Helvetica',
            }
        };
        this.assets = [];
        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'text',
                class: 'yellow',
                anchorX: 0.5,
                anchorY: 0.5,
                text: ''
            },
        ];
    }
}

module.exports = ComponentsStateTextTemplate;