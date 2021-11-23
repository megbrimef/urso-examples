class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.styles = {}

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'bgEx', path: `${_imagePath}/demostration1.jpg` },

            // { type: Urso.types.assets.BITMAPFONT, key: 'winFont', path: _fontPath + 'bigWinFont.fnt' },
        ];

        this.objects = [
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'deviceRotate'
            },
            {
                type: Urso.types.objects.COMPONENT,
                componentName: 'fullscreen'
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'bgCom',
                componentName: 'background'
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'slotMachine',
                componentName: 'slotMachine',
                x: 416, y: 63,
                width: 790, height: 501,
                options: {id: 'regular'},
                contents: [
                    {
                        type: Urso.types.objects.MASK,
                        name: 'slotMachineMask',
                        rectangle: [0, 0, 1270, 510]
                    }
                ]
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'winLinesCom',
                componentName: 'winLines'
            },
            {
                type: Urso.types.objects.ATLASIMAGE,
                assetKey: 'bg',
                filenameKey: 'background4.png',
                name: 'bg4',
                x: 397,
                y: 50
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'winCounterCom',
                componentName: 'winCounter'
            },
            {
                type: Urso.types.objects.COMPONENT,
                name: 'autoSpinCom',
                componentName: 'autoSpin'
            },

            {
                type: Urso.types.objects.GROUP,
                name: 'uiGroup',
                groupName: 'uiGroup'
            },
            {
                type: Urso.types.objects.IMAGE,
                assetKey: 'bgEx',
                name: 'bgEx',
                alpha: 0
                // width: '100%',
                // height: '100%',
                // stretchingType: 'circumscribed'
            },
            {
                type: Urso.types.objects.TEXT,
                fontFamily : 'Arial', fontSize: 12, fill : 0xffffff, align : 'center',
                name: 'ver',
                text: 'v 6',
                x: 1580,
                y: 730
            },
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
