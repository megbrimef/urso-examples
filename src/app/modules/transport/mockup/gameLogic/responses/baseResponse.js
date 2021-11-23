const helper = require('../helper');

class BaseResponse {
    constructor({ action, sesId, data }){
        this.action = action.replace('Request', 'Response');
        this.result = true;
        this.sesId = sesId;
        this._requestData = data;
        this._responseData = {};

        this._helper = helper;
    }

    make(){
        const responseObj = {
            action: this.action,
            result: this.result,
            sesId: this.sesId,
            data: this._responseData
        }
        
        const response = JSON.stringify(responseObj);
        return response;
    };
}

module.exports = BaseResponse;