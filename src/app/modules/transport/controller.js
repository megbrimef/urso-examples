const Mockup = require('../transport/mockup/mockup');

class GameModulesLogicTransportController extends Urso.SlotBase.Modules.Transport.Controller {

    constructor() {
        super();

        this._responceHandler = null;
        this._mockup = new Mockup();
    }

    init() {
        super.init();
        this.emit('modules.transport.ready');
    }

    setResponseHandler(handler) {
        this._responceHandler = handler;
    };

    send(message) {
        setTimeout(() => {
            const res = this._mockup.getResponse(message);
            this._responceHandler(JSON.parse(res));
        }, 50);
    };
};

module.exports = GameModulesLogicTransportController;
