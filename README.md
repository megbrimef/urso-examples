# README #

1)run command "yarn && yarn start" to start application

# How to #

1) create index.js with game deps and Urso.runGame call rules.
We recommend call this funcion on load.

2) put load config (load.js) into app/config and setup there your App namespace.

3) put main config (main.js) into app/config and configure there your App.
extendingChain uses for namespases extending.

4) put info file (_info.js) into app/templates to setup sub namespace

5) put info file (_info.js) into app/templates/scenes to setup sub namespace

6) put template file (play.js) into app/templates/scenes.
Play scene will use by default in our engine

7) put assets in src/assets. For example i'll put in src/assets/emitter 
config: emitter.json, and textures: Particle_purple.png and Particle_blue.png

8) put JSON config and texture assets into this.assets in the play scene

9) put emitter object data in this.objects in the play scene.

10) launch the game and you will see animation
