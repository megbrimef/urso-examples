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

6) put container object into this.objects in the play scene

7) container have array parameter 'contents' where you can put other objects as a childs

8) childs position calculating from parent container coordinates. 
Changing container's position will result in recalculation of it's childs coordinates

