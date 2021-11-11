class ModulesLogicMain {

    _changeTextPosition(coords){
        this.emit('components.textExample.changeTextPosition', coords)
    }
    
    _subscribeOnce(){
        this.addListener('change.text.position', this._changeTextPosition.bind(this), true);
    }
}

module.exports = ModulesLogicMain;