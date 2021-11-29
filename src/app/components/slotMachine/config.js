class AppComponentsSlotMachineConfig extends Urso.BaseGame.Components.SlotMachine.Config {

    //FIXME: maybe return more complexObjects for many slotmachines

    getDefaultConfig(){
        return {
            spinType: 'regular', // regular, drop, cascade
            isCascade: false,
            spinStartInterval: 50, //per reel
            reelsCount: 5,
            rowsCount: 3,
            borderSymbolsCount: 1,
            vectors: false, // or vectors length array like [5, 4, 3, 2, 1]  //todo
            blackoutOnShowWinlines: true,
            bounce: {
                start: {moveTo: 100, duration: 200},
                stop: {moveTo: 100, duration: 400},
            },

            rowsXoffset: false, // or array like [15, 20, 30, 40, 50]
            rowsYoffset: false, // or array like [15, 20, 30, 40, 50]

            blurSymbolsCount: [5, 10, 15, 20, 25],

            blurAlpha: 0.5,

            spinCompleteDelay: 200, //event delay, after reels stops

            symbolSpeed: 1.5, //pixels in MS

            speedUpReelsFactor: 2.5,

            //intrigue
            intrigueSpeedReelsFactor: 1.5,
            intrigueAdditionalSymbols: 10,

            symbolsBlurKeys: [], //array or array of arrays for each reel
            lastSymbolsBlurStaticKeys: [] //array or array of arrays for each reel [1,2,3,4] or [false,false,[1]]
        }
    }

    get(id) {
        if(!id)
            return this._getDefault();

        let configs = this._getConfig()

        if(!configs[id])
            return Urso.logger.error('Components.SlotMachine.Config error: wrong config id')

        return configs[id]
    }

    _getConfig(){
        let drop = {...this.getDefaultConfig(), ...this.getDropConfig()};
        let regular = this.getDefaultConfig();
        let regular_cascade = {...this.getDefaultConfig(), isCascade: true};
        let drop_cascade = {...drop, isCascade: true};
        return { drop, regular, regular_cascade, drop_cascade }
    }

    getDropConfig() {
        return {
            spinType: 'drop',
            borderSymbolsCount: 0,
            blurSymbolsCount: [0, 0, 0, 0, 0],
            dropTimings: {
                start: {defaultDelay:50, rowsDelay: 1000, reelsDelay: 50},
                stop: {defaultDelay:200, rowsDelay: 1000, reelsDelay: 50}
            },
        }
    }

    //FIXME: Move to separate file symbols.js //DONE

}

module.exports = AppComponentsSlotMachineConfig;