class AppTemplatesScenesPlay {
    constructor() {
        const _imagePath = 'assets/images/';

        this.assets = [
            {
                type: Urso.types.assets.CONTAINER, id: 'playImages', contents: [
                    { type: Urso.types.assets.IMAGE, key: 'torch_00', path: _imagePath + 'torch_00.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_01', path: _imagePath + 'torch_01.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_02', path: _imagePath + 'torch_02.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_03', path: _imagePath + 'torch_03.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_04', path: _imagePath + 'torch_04.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_05', path: _imagePath + 'torch_05.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_06', path: _imagePath + 'torch_06.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_07', path: _imagePath + 'torch_07.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_08', path: _imagePath + 'torch_08.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_09', path: _imagePath + 'torch_09.png' },
                    { type: Urso.types.assets.IMAGE, key: 'torch_10', path: _imagePath + 'torch_10.png' }
                ]
            }
        ];

        this.objects = [
            {
                type: Urso.types.objects.IMAGES_ANIMATION,
                name: 'lavaAnimation',
                assetKey: 'torch_00',
                alignX: 'center',
                alignY: 'center',
                anchorX: 0.5,
                anchorY: 0.5,
                duration: 450,
                loop: true,
                animationKeys: ['torch_00', 'torch_01', 'torch_02', 'torch_03', 'torch_04', 'torch_05', 'torch_06', 'torch_07', 'torch_08', 'torch_09', 'torch_10'],
                autostart: true
            }
        ];
    };

};

module.exports = AppTemplatesScenesPlay;
