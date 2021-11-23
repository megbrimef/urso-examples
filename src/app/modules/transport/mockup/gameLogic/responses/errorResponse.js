const BaseResponse = require('./baseResponse');

class ErrorResponse extends BaseResponse {

    constructor(params, type) {
        super(params);
        this._makeResponse(type);
    }

    _makeResponse(type) {
        this.result = false;

        switch (type) {
            case ErrorResponse.WRONG_REQUEST:
                this._responseData = { message: 'Wrong request' };
                break;
        
            default:
                this._responseData = { message: 'Internal server error' };
                this.action = 'InternalError';
                break;
        }
    };
}

ErrorResponse.UNEXPECTED = 0;
ErrorResponse.WRONG_REQUEST = 1;

module.exports = ErrorResponse;