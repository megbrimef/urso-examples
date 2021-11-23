const localData = require('./gameLogic/localData');
const Mapper = require('./gameLogic/mapper');

class Mockup {
    constructor() {
        this.gameConfig = require('./config/baseConfig');
        this.spinConfig = require('./config/spinConfig');
        this.mapper = new Mapper(this.gameConfig);

        this.setDefaults();
    }


    setDefaults() {
        localData.set('config.base', this.gameConfig);
        localData.set('balance.amount', this.gameConfig.starterBalance);
        localData.set('balance.currency', this.gameConfig.currency);
        localData.set('config.spin', this.spinConfig);
    };

    getResponse(req) {
        return this.mapper.makeResponse(JSON.stringify(req));
    }
}


module.exports = Mockup;