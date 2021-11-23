const ErrorResponse = require('./responses/errorResponse');

class Mapper {
    constructor(params){
        this._params = params;
        this._responses = params.responses || {};
    }

    makeResponse(message){
        const { action, sesId, data } = JSON.parse(message);
        if(!this._responses[action])
            return new ErrorResponse({ action, sesId, data }, ErrorResponse.WRONG_REQUEST).make();
        
        return new this._responses[action]({ action, sesId, data }, this._params).make();
    };
}

module.exports = Mapper;