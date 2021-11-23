const BaseResponse = require('./baseResponse');

class GambleResponse extends BaseResponse {
    constructor(req) {
        super(req);

        this._responseData = this._makeResponse(req);
    };

    _makeResponse(req){
        return this._helper.makeGamble(req);
    };
}

module.exports = GambleResponse;