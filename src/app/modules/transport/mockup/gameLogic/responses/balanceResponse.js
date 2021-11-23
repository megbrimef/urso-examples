const BaseResponse = require('./baseResponse');

class BalanceResponse extends BaseResponse {

    constructor(req) {
        super(req);
        
        this._responseData = this._makeResponse();
    }

    _makeResponse(){
        return this._helper.getBalance();
    };
}

module.exports = BalanceResponse;