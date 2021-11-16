class App extends Urso.Core.App {
    constructor(){
        super();
    }

    run(){
        Urso.addInstancesMode('test');
        super.run();
    }
}

module.exports = App;