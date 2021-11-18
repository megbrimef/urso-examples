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

5) put template file (play.js) into app/templates/scenes.
Play scene will use by default in our engine

6) put object data into this.objects in the play scene

7) you can change text's style inline or describing style inside of this.styles

8) launch the game and you will see image
