class ModulesStatesManagerConfigStatesActionsShowWinlinesAnimateByOne extends Urso.Core.Modules.StatesManager.Action {
    
    guard(){
        const autospinEnabled = Urso.localData.get('autospin.enabled');
        const slotMachineData = Urso.localData.get('slotMachine');
        const firstStageSlotWin = slotMachineData.spinStages[0].slotWin;
        const isCascade = Urso.localData.get('components.slotMachine.isCascade');

        return !autospinEnabled && firstStageSlotWin && firstStageSlotWin.lineWinAmounts.length && isCascade;
    }

};

module.exports = ModulesStatesManagerConfigStatesActionsShowWinlinesAnimateByOne;
