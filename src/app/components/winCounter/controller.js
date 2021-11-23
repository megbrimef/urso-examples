class ComponentsWinCounterController extends Urso.BaseGame.Components.WinCounter.Controller {
    _counterTextTween(obj, winVal) {
        obj.visible = true;
        obj.scaleX = obj.scaleY = obj.alpha = 0;
        obj.text = 0;
        obj.y = 0;
        let textConfig = {
            scaleX: 1, scaleY: 1, alpha: 1, text: winVal,
            onUpdate: () => {obj.text = obj.text.toFixed(2)},
            duration: 2,
            onComplete: () => {
                gsap.to(obj, { scaleX: 0, scaleY: 0, alpha: 0, delay: 1, onComplete: () => {
                    this.emit('components.winField.showWin.finished', null, 1);
                    this.firstWin = true;
                } });
            }
        };


        gsap.to(obj, textConfig);
    }
}

module.exports = ComponentsWinCounterController;
