class AppTemplatesGroupsExampleGroup {
    constructor(){

        this.assets = [];
        
        this.objects = [
            {
                type: Urso.types.objects.TEXT,
                name: 'Hello World',
                text: 'exampleGroup text',
                fontFamily: 'Arial',
                fontSize: 100,
                fill: '#ffffff',
                x: 300,
                y: 300
            }
        ]
    }
}

module.exports = AppTemplatesGroupsExampleGroup;