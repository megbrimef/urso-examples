class AppTemplatesScenesPlay {
    constructor() {
        
        this.styles = {
            '.yellow': {
                fill: '#ffff00',
                fontFamily: 'Helvetica',
            },
            '.green': {
                fill: '#008000',
                fontFamily: 'PT Sans',
                fontStyle: 'italic'
            }
        }
        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                text: 'red',
                fontSize: 60,
                fill: 'red',
                anchorX: 0.5,
                anchorY: 0.5,
                alignX: 'center',
                alignY: 'center',
                x: -300
            },
            {
                type: Urso.types.objects.TEXT,
                text: 'yellow',
                class: 'yellow',
                fontSize: 60,
                anchorX: 0.5,
                anchorY: 0.5,
                alignX: 'center',
                alignY: 'center',
            },
            {
                type: Urso.types.objects.TEXT,
                text: 'green',
                class: 'green',
                fontSize: 60,
                anchorX: 0.5,
                anchorY: 0.5,
                x: 300,
                alignX: 'center',
                alignY: 'center',
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
