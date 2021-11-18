class AppTemplatesScenesPlay {
    constructor() {
        const _emitterPath = 'assets/emitter/';

        this.assets = [
            { type: Urso.types.assets.JSON, key: 'emitterCfg', path: _emitterPath + 'emitter.json'},
            { type: Urso.types.assets.IMAGE, key: 'purple', path: _emitterPath + 'Particle_purple.png'},
            { type: Urso.types.assets.IMAGE, key: 'blue', path: _emitterPath + 'Particle_blue.png'}
        ];

        this.objects = [
            {
                type: Urso.types.objects.EMITTER,
                cfg: 'emitterCfg',
                textures: ['purple', 'blue'],
                alignX: 'center',
                alignY: 'center',
                autostart: true,
                scaleX: 5,
                scaleY: 5
            },

        ];
    };

};

module.exports = AppTemplatesScenesPlay;
