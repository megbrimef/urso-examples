const Mockup = require('../transport/mockup/mockup');

class GameModulesLogicTransportController extends Urso.Core.Modules.Transport.Controller {

    constructor() {
        super();

        this._responceHandler = null;
        this._mockup = new Mockup();

    }

    setResponseHandler(handler) {
        this._responceHandler = handler;
    };

    setReadyHandler(handler) {
        setTimeout(handler, 50);
    };

    send(message) {
        setTimeout(() => {
            const res = this._mockup.getResponse(message);
            this._responceHandler(JSON.parse(res));
        }, 50);
    };
};

module.exports = GameModulesLogicTransportController;
