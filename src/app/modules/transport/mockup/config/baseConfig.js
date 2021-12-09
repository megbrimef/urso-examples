const ApiVersionResponse = require('../gameLogic/responses/apiVersionResponse');
const CheckBrokenGameResponse = require('../gameLogic/responses/checkBrokenGameResponse');
const AuthResponse = require('../gameLogic/responses/authResponse');
const SpinResponse = require('../gameLogic/responses/spinResponse');
const BalanceResponse = require('../gameLogic/responses/balanceResponse');
const GambleResponse = require('../gameLogic/responses/gambleResponse');

const gameConfig = {
    reconnectTimeout: 5000,
    starterBalance: 10000,
    currency: 'USD',
    responses: {
        ApiVersionRequest: ApiVersionResponse,
        CheckBrokenGameRequest: CheckBrokenGameResponse,
        AuthRequest: AuthResponse,
        BalanceRequest: BalanceResponse,
        SpinRequest: SpinResponse,
        GambleRequest: GambleResponse
    },
    params: {
        scatterSymbols: ['1'],
        bets: [1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50, 100],
        extrabet: 0,
        betMultiplier: 1,
        coinValues: [0.01, 0.02],
        defaultCoinValue: 0.01,
        defaultBet: 1,
        defaultLines: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        avaliableLines: [
            [1, 1, 1, 1, 1], // 0
            [0, 0, 0, 0, 0], // 1
            [2, 2, 2, 2, 2], // 2
            [2, 2, 1, 2, 2], // 3
            [1, 0, 0, 0, 1], // 4
            [1, 2, 2, 2, 1], // 5
            [2, 1, 0, 1, 2], // 6
            [0, 1, 2, 1, 0], // 7
        ],
        payouts: [
            { payout: 30, symbols: [0, 0, 0], type: 'basic' },
            { payout: 120, symbols: [0, 0, 0, 0], type: 'basic' },
            { payout: 800, symbols: [0, 0, 0, 0, 0], type: 'basic' },
            { payout: 30, symbols: [1, 1, 1], type: 'basic' },
            { payout: 120, symbols: [1, 1, 1, 1], type: 'basic' },
            { payout: 800, symbols: [1, 1, 1, 1, 1], type: 'basic' },
            { payout: 20, symbols: [2, 2, 2], type: 'basic' },
            { payout: 100, symbols: [2, 2, 2, 2], type: 'basic' },
            { payout: 400, symbols: [2, 2, 2, 2, 2], type: 'basic' },
            { payout: 20, symbols: [3, 3, 3], type: 'basic' },
            { payout: 70, symbols: [3, 3, 3, 3], type: 'basic' },
            { payout: 250, symbols: [3, 3, 3, 3, 3], type: 'basic' },
            { payout: 20, symbols: [4, 4, 4], type: 'basic' },
            { payout: 70, symbols: [4, 4, 4, 4], type: 'basic' },
            { payout: 250, symbols: [4, 4, 4, 4, 4], type: 'basic' },
            { payout: 10, symbols: [5, 5, 5], type: 'basic' },
            { payout: 50, symbols: [5, 5, 5, 5], type: 'basic' },
            { payout: 120, symbols: [5, 5, 5, 5, 5], type: 'basic' },
            { payout: 10, symbols: [6, 6, 6], type: 'basic' },
            { payout: 50, symbols: [6, 6, 6, 6], type: 'basic' },
            { payout: 120, symbols: [6, 6, 6, 6, 6], type: 'basic' },
            { payout: 4, symbols: [7, 7, 7], type: 'basic' },
            { payout: 30, symbols: [7, 7, 7, 7], type: 'basic' },
            { payout: 100, symbols: [7, 7, 7, 7, 7], type: 'basic' },
            { payout: 4, symbols: [8, 8, 8], type: 'basic' },
            { payout: 30, symbols: [8, 8, 8, 8], type: 'basic' },
            { payout: 100, symbols: [8, 8, 8, 8, 8], type: 'basic' }
        ]
    }
};

module.exports = gameConfig;