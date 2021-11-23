class ComponentsBackgroundTemplate {
    constructor() {
        const _atlassBgPath = 'assets/atlases/bg';
        const _imagePath = 'assets/images/';

        this.assets = [
            { type: Urso.types.assets.ATLAS, key: 'bg', path: `${_atlassBgPath}/bg.json` },
        ];

        this.objects = [

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'background2.jpg'
            },

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'background1.png',
                name: 'bg1',
                x: 267,
                y: 660
            },



            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'background3.png',
                name: 'bg3',
                visible: false
            },


            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'background5.png',
                name: 'bg5',
                x: 328,
                y: 25
            },

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'spotlight2.png',
                name: 'spotlite22',
                x: 43
            },

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'spotlight2.png',
                name: 'spotlite2',
                scaleX: -1,
                x: 1591
            },

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'spotlight1.png',
                name: 'spotlite1',
                x: 145
            },

            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'spotlight1.png',
                name: 'spotlite11',
                scaleX: -1,
                x: 1490
            },

        ];
    };

};

module.exports = ComponentsBackgroundTemplate;
