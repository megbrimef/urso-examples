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
                type: Urso.types.objects.DRAGONBONES,
                name: 'dragonBones example',
                assetKey: 'ghostDragonBones',
                animation: {
                    animationName: 'default',
                    armatureName: 'skeleton',
                    autoplay: true,
                    loop: true
                },
                scaleX: 1.4,
                scaleY: 1.4,
                anchorX: 0.5,
                anchorY: 0.5,
                x: 500,
                y: 550,
            }]      
    };

};

module.exports = AppTemplatesScenesPlay;
