# README #

1) create index.js with game deps and Urso.runGame call rules. We recommend call this funcion on load

2) put load config (load.js) into app/config and setup there your App namespace

3) put main config (main.js) into app/config and configure there your App. extendingChain uses for namespases extending

4) in package.json add @urso/slot-base as dependency

5) put info file (_info.js) into app/templates to setup sub namespace

6) put info file (_info.js) into app/templates/scenes to setup sub namespace

7) put template file (play.js) into app/templates/scenes. Play scene will be used by default in our engine

8) in this.objects on the play scene put components from slot-base you want to use

9) in options of component 'slotMachine' put option 'id' with value 'regular'

10) run the game. It will be loaded with spin type 'regular'
