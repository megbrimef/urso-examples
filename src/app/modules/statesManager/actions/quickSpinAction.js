class ModulesStatesManagerConfigStatesActionsQuickSpinAction extends Urso.Core.Modules.StatesManager.Action {
   
    constructor(args){
        super(args)

        this._wasTerminated = false;
    }

    run(clbk){
        this._wasTerminated = false;
        super.run(clbk);
    }

    terminate(){
        this._wasTerminated = true;
        super.terminate();
    }
    
    _onFinish(){
        if(!this._wasTerminated){
            this.emit('components.slotMachine.speedUpReels');
        }

        super._onFinish();
    }
};

module.exports = ModulesStatesManagerConfigStatesActionsQuickSpinAction;
