const BaseResponse = require('./baseResponse');

class CheckBrokenGameRequest extends BaseResponse {

    constructor(req) {
        super(req);
        
        this._responseData = { haveBrockenGame: false };
    }
}

module.exports = CheckBrokenGameRequest;