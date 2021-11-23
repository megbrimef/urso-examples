class ModulesStatesManagerConfigStatesActionsDestroyWinSymbolsAndDropNew extends Urso.Core.Modules.StatesManager.Action {
    
    guard(){
        const autospinEnabled = Urso.localData.get('autospin.enabled');
        const slotMachineData = Urso.localData.get('slotMachine');
        const firstStageSlotWin = slotMachineData.spinStages[0].slotWin;

        return !autospinEnabled && firstStageSlotWin && firstStageSlotWin.lineWinAmounts.length;
    }

};

module.exports = ModulesStatesManagerConfigStatesActionsDestroyWinSymbolsAndDropNew;
