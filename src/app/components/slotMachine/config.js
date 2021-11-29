class AppComponentsSlotMachineConfig extends Urso.BaseGame.Components.SlotMachine.Config {

    //FIXME: maybe return more complexObjects for many slotmachines

    getDefaultConfig(){
        return {
            spinType: 'basic',
            isDrop: false,
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

}

module.exports = AppComponentsSlotMachineConfig;