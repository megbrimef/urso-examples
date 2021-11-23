const spinConfig = require('../spinConfig');
const localData = require('./localData');

class Helper {
    constructor() {
        this._reset();
    }

    _reset() {
        localData.set('spin.counter', 0);
    }

    getInitalSymbols() {
        return spinConfig.spin[0];
    };

    makeSpin(req) {
        this._chargeForSpin(req.data)
        const rows = this._getNextSpinSymbols();
        const state = this._getCurrentState();
        const spinStages = this._calculateSpinStages(rows, req);

        return {
            state,
            spinStages
        }
    };

    _getLines() {
        const trueLines = true;
        const lines = localData.get('config.base.params.avaliableLines');
        return { lines, trueLines };
    };


    _getLinesContentBase(spinSymbols, req) {
        const linesData = this._getLines(spinSymbols);
        let linesContent = [];

        for (let i = 0; i < linesData.lines.length; i++) {
            const line = linesData.lines[i];
            const lineSymbols = [];
            const wonSymbols = [];
            for (let j = 0; j < line.length; j++) {
                lineSymbols.push(spinSymbols[+line[j]][j]);
                wonSymbols.push([j + '', line[j]]);
            }
            linesContent.push({ line: line, lineSymbols: lineSymbols, wonSymbols: wonSymbols, lineIndex: linesData.trueLines ? i : -1 });
        }

        linesContent = linesContent.slice(0, req.data.lines.length);
        return linesContent;
    };

    _calculateSpinStages(rows, req) {
        const slotWin = this._calculateSlotWin(rows, req);
        return [
            {
                spinResult: {
                    type: 'SpinResult',
                    rows: rows
                },
                slotWin: slotWin
            }
        ];
    };

    _getJokerSymbols() {
        const gameParams = localData.get('config.base.params', []);
        const freespinInProgress = localData.get('freespins.inProgress', false);
        let jokerSymbols = false;
        if (freespinInProgress && gameParams.bonusGameJokerSymbols)
            jokerSymbols = gameParams.bonusGameJokerSymbols;
        else
            jokerSymbols = gameParams.jokerSymbols;
        return jokerSymbols || [];
    };

    _isSymbolJoker(symbol) {
        const jokerSymbols = this._getJokerSymbols();
        let isJoker = false;
        if (jokerSymbols) {
            for (let i = 0; i < jokerSymbols.length; i++)
                if (jokerSymbols[i] === symbol)
                    isJoker = true;
        }
        return isJoker;
    };

    _getScatterSymbols() {
        return [];
        // var gameSettings = localData.get('apiMockup.gameSettings');
        // var bonusGameInProgress = localData.get('apiMockup.bonusGame.inProgress');
        // var scatterSymbols = false;
        // if (bonusGameInProgress && gameSettings.bonusGameScatterSymbols)
        //     scatterSymbols = gameSettings.bonusGameScatterSymbols;
        // else
        //     scatterSymbols = gameSettings.scatterSymbols;
        // return scatterSymbols || [];
    };

    _isSymbolScatter(symbol) {
        const scatterSymbols = this._getScatterSymbols();
        let isScatter = false;
        if (scatterSymbols) {
            for (let i = 0; i < scatterSymbols.length; i++)
                if (scatterSymbols[i] === symbol)
                    isScatter = true;
        }
        return isScatter;
    };

    _getWinlineCandidate(lineContent, onlyJokers) {
        const winlineCandidate = { jokersCount: 0, length: 0, lineIndex: lineContent.lineIndex, wonSymbols: lineContent.wonSymbols };
        for (let j = 0; j < lineContent.lineSymbols.length; j++) {
            const symbol = lineContent.lineSymbols[j];
            const isJoker = this._isSymbolJoker(symbol);
            const isScatter = this._isSymbolScatter(symbol);

            if (onlyJokers && !isJoker)
                break;

            if (isScatter && !isJoker || j > 0 && !isJoker && !this._isSymbolJoker(winlineCandidate.symbol) && symbol !== winlineCandidate.symbol)
                break;

            winlineCandidate.length++;
            if (isJoker)
                winlineCandidate.jokersCount++;

            if (!winlineCandidate.symbol || this._isSymbolJoker(winlineCandidate.symbol) && !isJoker)
                winlineCandidate.symbol = symbol;
        }

        return winlineCandidate;
    };

    _getWinlinesCandidates(linesContent) {
        const winlinesCandidates = [];
        for (let i = 0; i < linesContent.length; i++) {
            const winlineCandidates = [];
            const lineContent = linesContent[i];
            winlineCandidates.push(this._getWinlineCandidate(lineContent));
            winlineCandidates.push(this._getWinlineCandidate(lineContent, true));
            winlinesCandidates.push(winlineCandidates);
        }
        return winlinesCandidates;
    };

    _getLineWinAmounts(winlinesCandidates) {
        const payouts = localData.get('config.base.params.payouts');
        const lineWinAmounts = [];
        for (let i = 0; i < winlinesCandidates.length; i++) {
            const winlineCandidates = winlinesCandidates[i];
            let payoutMatched = false;
            let candidateMatched = false;
            for (let ii = 0; ii < winlineCandidates.length; ii++) {
                const winlineCandidate = winlineCandidates[ii];
                for (let j = 0; j < payouts.length; j++) {
                    const payout = payouts[j];
                    if (payout.symbols[0] === winlineCandidate.symbol && payout.symbols.length <= winlineCandidate.length && (!payoutMatched || +payout.payout > +payoutMatched.payout)) {
                        payoutMatched = payout;
                        candidateMatched = winlineCandidate;
                    }
                }
            }

            if (payoutMatched) {
                const payoutValue = +payoutMatched.payout;

                // var jokerMultipliers = gameSettings.jokerMultipliers;
                // if (jokerMultipliers && candidateMatched.jokersCount && !this.isSymbolJoker(candidateMatched.symbol)) {
                //     payoutValue *= jokerMultipliers[candidateMatched.jokersCount - 1];
                // }

                // var freespinsInProgress = localData.get('apiMockup.freespins.inProgress');
                // if (freespinsInProgress) {
                //     var freespinsMultiplier = gameSettings.freespinsMultiplier;
                //     if (freespinsMultiplier)
                //         payoutValue *= freespinsMultiplier;
                // }

                const wonSymbols = [];
                for (let k = 0; k < payoutMatched.symbols.length; k++)
                    wonSymbols.push(candidateMatched.wonSymbols[k]);

                let lwa = false;
                if (candidateMatched.lineIndex === -1) {
                    lwa = {
                        amount: payoutValue + '',
                        type: 'WinAmount',
                        wonSymbols: wonSymbols
                    };
                }
                else {
                    lwa = {
                        amount: payoutValue + '',
                        selectedLine: candidateMatched.lineIndex + '',
                        type: 'LineWinAmount',
                        wonSymbols: wonSymbols
                    };
                }

                lineWinAmounts.push(lwa);
            }
        }

        return lineWinAmounts;
    };

    _postprocessWinAmounts(lineWinAmounts, bonusGameData = {}) {
        let totalWin = 0;
        for (let i = 0; i < lineWinAmounts.length; i++)
            if (lineWinAmounts[i].amount)
                totalWin += +lineWinAmounts[i].amount;

        totalWin = totalWin.toFixed(2);

        const slotWin = totalWin > 0 || bonusGameData.newState && bonusGameData.newState !== 'Ready' ? {
            totalWin: totalWin,
            canGamble: true,// add gamble
            gambleParams: {
                history: ['0', '1', '1', '0', '0']
            },
            lineWinAmounts: lineWinAmounts
        } : false;

        this._payForWin(totalWin);

        localData.set('gamble', { totalWin: totalWin, stepsLeft: 4 });

        return { slotWin, bonusGameData };
    };

    _toCoins(amount, req) {
        return (+amount * +req.data.bet * +req.data.coin).toFixed(2);
    };

    _payForWin(amount) {
        const balanceAmount = localData.get('balance.amount');
        const newBalanceAmount = +balanceAmount + (+amount);
        localData.set('balance.amount', newBalanceAmount);
    };

    _chargeForSpin(data) {
        const freespinsInProgress = localData.get('freespins.inProgress', false);

        if (freespinsInProgress)
            return;

        const balanceAmount = localData.get('balance.amount');
        const spinCost = +data.bet * +data.coin * +data.lines.length;

        const newBalanceAmount = +(balanceAmount - spinCost).toFixed(2);
        localData.set('balance.amount', newBalanceAmount);
    };

    _calculateSlotWin(rows, req) {
        const linesContent = this._getLinesContentBase(rows, req);
        const winlinesCandidates = this._getWinlinesCandidates(linesContent);
        const lineWinAmounts = this._getLineWinAmounts(winlinesCandidates);

        for (var i = 0; i < lineWinAmounts.length; i++)
            if (lineWinAmounts[i].amount)
                lineWinAmounts[i].amount = this._toCoins(+lineWinAmounts[i].amount, req);

        // TODO: bonus game data process
        const bonusGameData = {};

        const { slotWin } = this._postprocessWinAmounts(lineWinAmounts, bonusGameData, req);

        return slotWin;
    };

    _getCurrentState() {
        return 'Ready';
    };

    _getNextSpinSymbols() {
        const spinCounter = localData.get('spin.counter');
        const validatedCounter = this._validateNextTypeIndex('spin', spinCounter + 1);

        localData.set('spin.counter', validatedCounter);
        return spinConfig.spin[validatedCounter];
    };

    _validateNextTypeIndex(type, index) {
        const indexExist = index < spinConfig[type].length;

        if (!indexExist)
            index = 0;

        return index;
    };

    getBalance() {
        const { totalWin = 0 } = localData.get('gamble') || {};
        const { amount, currency } = localData.get('balance');

        localData.set('gamble', { totalWin: "0.00", canGamble: "false" });

        const totalAmount = (+totalWin + +amount).toFixed(2);

        return {
            totalAmount: totalAmount,
            currency: currency
        }
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    makeGamble() {
        const data = { totalWin: "0.00", canGamble: "false" };
        const isRed = !!this.getRandomInt(2);
        let { totalWin, stepsLeft } = localData.get('gamble');

        if (isRed && stepsLeft > 0) {
            totalWin *= 2;
            data.totalWin = totalWin;
            stepsLeft--;
        } else {
            totalWin = 0;
            stepsLeft = 0;
        }

        data.canGamble = stepsLeft > 0;

        localData.set('gamble', { totalWin, stepsLeft });

        return {
            data
        }
    }
}

const instance = new Helper();
Object.freeze(instance);

module.exports = instance;