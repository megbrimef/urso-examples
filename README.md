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

7) put components object data into this.objects in the play scene

8) put info file (_info.js) into app/components to setup sub namespace

9) create components folders in app/components. Folders might content controller.js, template.js 
and _info.js where you have to setup sub namespace

10) in template.js you can put objects you want to create into this.objects

11) to subscribe to the event use this.addListener('eventName', callback). We recomend put it
into the method _subscribeOnce() that will be called on component create

12) to fire event use method this.emit('eventName', arguments). In our case on button 
press we're firing event 'change.text.position' with new coordinates as argument.
In this case components communicating directly, but we recommend to use logic layer
to separate components logic from each other

13) launch game and you will see result
