class ModulesLogicController extends Urso.Core.Modules.Logic.Controller {
    getAdditionalLogicBlocks(){
        return ['exampleLogic'];
    };
}

module.exports = ModulesLogicController;