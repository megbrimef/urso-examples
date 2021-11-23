const BaseResponse = require('./baseResponse');

class SpinResponse extends BaseResponse {
    constructor(req) {
        super(req);

        this._responseData = this._makeResponse(req);
    };

    _makeResponse(req){
        return this._helper.makeSpin(req);
    };
}

module.exports = SpinResponse;