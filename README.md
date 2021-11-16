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

7) put component object data into this.objects in the play scene

8) put info file (_info.js) into app/components to setup sub namespace

9) create component folder in app/components. Folder might content controller.js, template.js 
and _info.js where you have to setup sub namespace

10) in template.js you can put objects you want to create into this.objects.
I've created button named 'exampleButton' and text 'exampleText'

11) override method 'run' in app.js. To set your overrided app.js, in src/index.js
add Urso.App.App = *your app.js*

12) In app.run use Urso.addInstancesMode('modeName') to add mode.
For example we've added mode 'test'

13) in component create folder named after mode name, add files you want to use with that mode.
In _info.js setup sub namespace. In our exampleComponent we've created folder 'test', 
and putted config.js in there

14) now you can get instance of moded class using this.getInstance('instanceName') in controller.js.

15) launch game. Pressing the button you'll see result
