class AppComponentsSlotMachineSymbolsConfig extends Urso.BaseGame.Components.SlotMachine.Config {

    getSymbols() {
        const symbols = super.getSymbols();

        symbols.push(
            {
                key: '9',
                //FIXME: need to make more complex object { key, static: { blur, texture }, animation: { default: {...}, ... } } or like this
                object: { type: Urso.types.objects.IMAGE, assetKey: '09', anchorX: 0.5, anchorY: 0.5 }
            },
            {
                key: '10',
                object: { type: Urso.types.objects.IMAGE, assetKey: '10', anchorX: 0.5, anchorY: 0.5 }
            },
        );

        return symbols;
    }
}

module.exports = AppComponentsSlotMachineSymbolsConfig;