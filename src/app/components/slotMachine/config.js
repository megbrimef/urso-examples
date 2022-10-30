class AppComponentsSlotMachineConfig extends Urso.SlotBase.Components.SlotMachine.Config {

    getBasicConfig() {
        const basicConfig = super.getBasicConfig();

        basicConfig.bounce = {
            top: { to: { y: -80, x: 0 }, duration: 200 },
            bottom: { to: { y: 80, x: 0 }, duration: 200 }
        };

        basicConfig.speedUpReelsFactor = 10;

        return basicConfig;
    }
}

module.exports = AppComponentsSlotMachineConfig;