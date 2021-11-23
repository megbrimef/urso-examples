class ComponentsWinLinesController extends Urso.BaseGame.Components.WinLines.Controller {
    _animateLine(lineIndex, callback) {
        this._animationTween = gsap.timeline({ defaults: { duration: 2 } });
        this._animationTween.to({ x: 0 }, { x: 1000, onComplete: () => { callback(); } });
    };

    _animateByOneStartHandler() {
        const slotMachineData = Urso.localData.get('slotMachine');
        const firstStageSlotWin = slotMachineData.spinStages[0].slotWin;
        const spinType = Urso.localData.get('spinType');

        this._animateByOneIndex = 0;

        const callback = () => {
            if (this._animateByOneIndex !== -1) {
                if (!firstStageSlotWin.lineWinAmounts[this._animateByOneIndex]){

                    if(spinType === 2) {
                        this.emit('components.winlines.animateByOne.finished', null, 1)
                        return
                    }

                    this._animateByOneIndex = 0;
                }

                const line = firstStageSlotWin.lineWinAmounts[this._animateByOneIndex];

                this._runSymbolAnimation(line);
                this._animateLine(line.selectedLine, callback);
                this._animateByOneIndex++;
                return;
            }
            // this.emit('components.winlines.animateByOne.finished', null, 1);
        };

        callback();
    };

    _animateAllStartHandler() {
        const slotMachineData = Urso.localData.get('slotMachine');
        const firstStageSlotWin = slotMachineData.spinStages[0].slotWin;

        if(firstStageSlotWin)
            return super._animateAllStartHandler();

        this.emit('components.winlines.animateAll.finished', null, 1);
    };
}

module.exports = ComponentsWinLinesController;
