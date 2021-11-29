class AppComponentsSlotMachineSymbolsConfig extends Urso.BaseGame.Components.SlotMachine.SymbolsConfig {

    getSymbols() {
        const symbols = super.getSymbols();

        symbols.push(
            {
                key: '9',
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