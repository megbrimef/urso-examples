class AppComponentsSlotMachineConfig extends Urso.SlotBase.Components.SlotMachine.Config {

    getBasicConfig(){
        const config = super.getBasicConfig();
        const bounce = {
            top: { to: { y: -80, x: 0 }, duration: 200 },
            bottom: { to: { y: 80, x: 0 }, duration: 200 },
        };
        return { ...config, bounce };
    }
}

module.exports = AppComponentsSlotMachineConfig;