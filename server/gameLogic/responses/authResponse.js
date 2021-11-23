const BaseResponse = require('./baseResponse');

class AuthResponse extends BaseResponse {

    constructor(req, gameParams) {
        super(req);
        this._responseData = this._makeResponse(gameParams);
    }

    _makeResponse(gameParams){
        const { 
            bets, 
            extrabet, 
            betMultiplier, 
            coinValues, 
            defaultCoinValue, 
            defaultBet,
            defaultLines,
            avaliableLines,
            payouts
        } = gameParams.params;

        const initialSymbols = this._helper.getInitalSymbols();

        const response = {
            sessionId: '123-3123-1233-12-313',
            bets, 
            extrabet,
            betMultiplier,
            coinValues,
            defaultCoinValue,
            defaultBet,
            defaultLines,
            gameParameters: {
                avaliableLines,
                payouts,
                initialSymbols
            }
        };
        return response;
    };
}

module.exports = AuthResponse;