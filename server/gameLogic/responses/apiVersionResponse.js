const BaseResponse = require('./baseResponse');

class ApiVersionResponse extends BaseResponse {

    constructor(req, { reconnectTimeout }) {
        super(req);

        this._responseData = { transportConfig: { reconnectTimeout }}
    };
};

module.exports = ApiVersionResponse;