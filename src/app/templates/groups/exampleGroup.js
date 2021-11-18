class AppTemplatesGroupsExampleGroup {
    constructor(){

        this.assets = [];
        
        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'exampleText',
                text: 'exampleGroup text',
                fontFamily: 'Arial',
                fontSize: 100,
                fill: '#ffffff',
                anchorX: 0.5,
                anchorY: 0.5,
                alignX: 'center',
                alignY: 'center'
            }
        ]
    }
}

module.exports = AppTemplatesGroupsExampleGroup;