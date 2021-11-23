class ComponentsSlotMachineSymbol {

    constructor() {
        this.tween = this.getInstance('Tween');
        this.reset();
    }

    getPosition(){
        const { x, y } = this._texture;
        return { x, y };
    }

    _getKey(symbol){
        return Urso.helper.ldgZero(symbol, 2);
    }

    setSymbolsConfig(symbolsConfig, addToParent){
        const { template, parent } = symbolsConfig;

        this._parent = parent;

        if(!this._texture){
            this._createTexture(template);
        }

        const textureKey = this._getKey(template.key);

        this.setTexture(textureKey)

        if(this._parent && addToParent)
            this._addToParent()
    }
    
    _addToParent(){
        this._parent.addChild(this._texture);
    }

    _createTexture({ object }){
        this._texture = Urso.objects.create(object, null, true);
    }

    reset() {
        this.animationTween = null;

        if (this.activeTween)
            this.activeTween.stop();

        this.activeTween = null;
        this.nextY = 0;
    }

    removeFromScene(){
        if(this.parent){
            this.parent.removeChild(this.texture);
        }

        this.parent = null;
    }

    setTexture(textureKey){
        this._texture.changeTexture(textureKey);
    }
    
    setPosition(x, y) {
        this._texture.x = x;
        this._texture.y = y;
        this.nextY = y;
    }

    animate() {
        if(!this._texture)
            return

        this.animationTween = gsap.timeline({ defaults: { duration: 1 } });

        this.animationTween.to(this._texture, { scaleX: 1.2, scaleY: 1.2 })
            .to(this._texture, { scaleX: 1, scaleY: 1 });

        // this.emit('component.slotMachine.symbol.startAnimation', this.getPosition());
    }

    stopAnimation() {
        setTimeout(() => {
            if (this.animationTween) {
                this.animationTween.kill(); //todo find way to stop and desroy it?!

                this.animationTween = null;

                this._texture.scaleX = 1;
                this._texture.scaleY = 1;
            }
        }, 10)
    }

    setTimeScale(timeScale){
        if(this.activeTween){
            this.tween.globalTimeScale = timeScale;
        }
    }

    moveTween(moveTo, tweenDuration, startDelay, callback) {
        this.nextY += moveTo;
        let delay = 0;

        if(!this.activeTween){
            this.activeTween = this.tween.add(this._texture);
            delay = startDelay;
        }

        // this.activeTween._functions.onCompleteOnce = []

        this.activeTween.onComplete.addOnce(() => callback());
        this.activeTween.to({y: this.nextY}, tweenDuration, 'none', true, delay);
    }
}

module.exports = ComponentsSlotMachineSymbol;
