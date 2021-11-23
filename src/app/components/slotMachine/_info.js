Urso.App.Components.SlotMachine = {
    Config: require('./config.js'),
    Template: require('./template.js'),
    Symbol: require('./symbol.js'),
    Controller: require('./controller.js'),
    Service: require('./service.js'),
    Tween: require('./tween.js'),
    SymbolsConfig: require('./symbolsConfig.js'),

    //FIXME: Maybe move it to modes and make separation for config // DONE: it was decided not to use modes
    Regular: require('./spinTypes/regular.js'),
    Drop: require('./spinTypes/drop.js')
};