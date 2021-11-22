class AppTemplatesScenesPlay {
    constructor() {
        const _dragonBonesPath = 'assets/dragonBones/';

        this.assets = [
            {
                type: Urso.types.assets.DRAGONBONES,
                key: 'ghostDragonBones',
                skeletonJson: _dragonBonesPath + 'Ghost_ske.json',
                textureJson: _dragonBonesPath + 'Ghost_tex.json',
                textureImage: _dragonBonesPath + 'Ghost_tex.png'
            },
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'noAnimationContainer',
                x: 300, y: 300,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'no animation',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 300
                    },
                    {
                        type: Urso.types.objects.DRAGONBONES,
                        name: 'dragonBones example',
                        assetKey: 'ghostDragonBones',
                        animation: {
                            animationName: 'default',
                            armatureName: 'skeleton',
                        },
                        anchorX: 0.5,
                        anchorY: 0.5,

                    },
                ],
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'animatedOnceContainer',
                x: 1600, y: 300,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'animated once',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 300
                    },
                    {
                        type: Urso.types.objects.DRAGONBONES,
                        name: 'dragonBones example',
                        assetKey: 'ghostDragonBones',
                        animation: {
                            animationName: 'default',
                            armatureName: 'skeleton',
                            autoplay: true,
                        },
                        anchorX: 0.5,
                        anchorY: 0.5,
                    },
                ]
            },
            {
                type: Urso.types.objects.CONTAINER,
                name: 'onLoopContainer',
                x: 1000, y: 600,
                contents: [
                    {
                        type: Urso.types.objects.TEXT,
                        text: 'animation on loop',
                        fontFamily: 'Arial',
                        fontSize: 80,
                        fill: '#ffffff',
                        anchorX: 0.5,
                        anchorY: 0.5,
                        y: 300
                    },
                    {
                        type: Urso.types.objects.DRAGONBONES,
                        name: 'dragonBones example',
                        assetKey: 'ghostDragonBones',
                        animation: {
                            animationName: 'default',
                            armatureName: 'skeleton',
                            autoplay: true,
                            loop: true
                        },
                        anchorX: 0.5,
                        anchorY: 0.5,
                    }
                ]
            },
        ]      
    };

};

module.exports = AppTemplatesScenesPlay;
