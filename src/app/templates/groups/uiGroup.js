class AppTemplatesGroupsGroup {
    constructor() {
        const _uiPath = 'images/ui';
        const _fontsPath = 'fonts/';

        this.styles = {
            '.baseUi': {
                fontFamily: 'julee',
                fontSize: 52,
                fill: '#808B92',
                stroke: '#2D2F21',
                anchorX: 0.5,
                anchorY: 0.5,
                fontSize: 24,
                strokeThickness: 2,
                wordWrap: true,
            },
            '.btn-text': {
                fontSize: 38,
            },
            '.winFieldValue': {
                fontSize: 46,
            },
            '.cheeringText': {
                fontSize: 44,
            },
            '.linesVal': {
                fontSize: 32,
            },
            '.btn-over': {
                // fill: '#D1D1D1',
            },
            '.btn-press': {
                fill: '#34383A',
            }
        };

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'autoPressed', path: `${_uiPath}/buttons/auto_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'autoUnpressed', path: `${_uiPath}/buttons/auto_unpressed.png` },
            { type: Urso.types.assets.FONT, key: 'julee', path: _fontsPath + 'Julee-Regular.ttf' },

            { type: Urso.types.assets.IMAGE, key: 'btnPress', path: `${_uiPath}/buttons/btn_press.png` },
            { type: Urso.types.assets.IMAGE, key: 'btnNormal', path: `${_uiPath}/buttons/btn_normal.png` },
            { type: Urso.types.assets.IMAGE, key: 'btnNoacive', path: `${_uiPath}/buttons/btn_noactive.png` },
            { type: Urso.types.assets.IMAGE, key: 'btnHover', path: `${_uiPath}/buttons/btn_hover.png` },

            { type: Urso.types.assets.IMAGE, key: 'spinPressed', path: `${_uiPath}/buttons/spin_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'spinUnpressed', path: `${_uiPath}/buttons/spin_unpressed.png` },

            { type: Urso.types.assets.IMAGE, key: 'linesUnpressed', path: `${_uiPath}/buttons/lines_unpressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'infoUnpressed', path: `${_uiPath}/buttons/info_unpressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'winFieldPanel', path: `${_uiPath}/panels/win_panel.png` },
            { type: Urso.types.assets.IMAGE, key: 'creditPanel', path: `${_uiPath}/panels/credit_panel.png` },
            { type: Urso.types.assets.IMAGE, key: 'totalBetPanel', path: `${_uiPath}/panels/total_bet_panel.png` },
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'uiContainer', 
                contents: [
                    {
                        type: Urso.types.objects.COMPONENT,
                        componentName: 'buttons'
                    },
                    {
                        type: Urso.types.objects.COMPONENT,
                        name: 'betCom',
                        componentName: 'bet'
                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'spin',
                        class: 'uiButton',
                        action: () => Urso.observer.fire('components.slotMachine.spinCommand'),
                        x: 1675,
                        y: 916,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'spinUnpressed',
                            out: 'spinUnpressed',
                            pressed: 'spinPressed',
                            disabled: 'spinUnpressed'
                        },
                    },

                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'stop',
                        class: 'uiButton',
                        action: () => Urso.observer.fire('components.slotMachine.stopCommand'),
                        x: 1675,
                        y: 916,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'spinUnpressed',
                            out: 'spinUnpressed',
                            pressed: 'spinPressed',
                            disabled: 'spinUnpressed'
                        },
                    },
    
                    {
                        type: Urso.types.objects.IMAGE,
                        x: 680,
                        y: 789,
                        anchorX: 1,
                        assetKey: 'linesUnpressed'
                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'lines',
                        class: 'uiButton disableable',
                        action: () => Urso.observer.fire('components.lines.switch'),
                        x: 680,
                        y: 924,
                        anchorX: 1,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'btnHover',
                            out: 'btnHover',
                            pressed: 'btnPress',
                            disabled: 'btnNoacive'
                        },
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        class: 'baseUi btn-text lines',
                        text: 'LINES',
                        x: 550,
                        y: 922,
                        wordWrapWidth: 440
                    },

                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'linesPanelContainer',
                        x: 545,
                        y: 840,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'linesCom',
                                componentName: 'lines'
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                anchorX: 0.5,
                                anchorY: 0.5,
                                class: 'baseUi linesVal',
                                text: '',
                                y: 10,
                                wordWrapWidth: 440
                            }
                        ]
                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'oneBet',
                        class: 'uiButton disableable',
                        action: () => Urso.observer.fire('components.bet.switch', { type: 'one' }),
                        x: 750,
                        y: 974,
                        anchorX: 1,
                        buttonFrames: {
                            over: 'btnHover',
                            out: 'btnHover',
                            pressed: 'btnPress',
                            disabled: 'btnNoacive'
                        },
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        class: 'baseUi btn-text oneBet',
                        text: 'BET ONE',
                        x: 619,
                        y: 1017,
                        wordWrapWidth: 440
                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'maxBet',
                        class: 'uiButton disableable',
                        action: () => Urso.observer.fire('components.bet.switch', { type: 'max' }),
                        x: 1430,
                        y: 974,
                        anchorX: 1,
                        buttonFrames: {
                            over: 'btnHover',
                            out: 'btnHover',
                            pressed: 'btnPress',
                            disabled: 'btnNoacive'
                        },
                    },
                    {
                        type: Urso.types.objects.TEXT,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        class: 'baseUi btn-text maxBet',
                        text: 'BET MAX',
                        x: 1300,
                        y: 1016,
                        wordWrapWidth: 440
                    },
                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'creditPanelContainer',
                        x: 440,
                        y: 85,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'balanceCom',
                                componentName: 'balance'
                            },
                            {
                                type: Urso.types.objects.IMAGE,
                                assetKey: 'creditPanel',
                                anchorX: 0.5,
                                anchorY: 0.5,
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi balanceVal',
                                text: '',
                                y: 10,
                                wordWrapWidth: 440
                            }
                        ]
                    },
                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'totalBetPanelContainer',
                        x: 1462,
                        y: 85,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'totalBetCom',
                                componentName: 'totalBet'
                            },
                            {
                                type: Urso.types.objects.IMAGE,
                                name: 'totalBetPanel',
                                assetKey: 'totalBetPanel',
                                anchorX: 0.5,
                                anchorY: 0.5,
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi totalBetVal',
                                text: '',
                                y: 10,
                                wordWrapWidth: 440
                            }
                        ]
                    },
                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'winPanelFieldContainer',
                        x: 960,
                        y: 947,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                componentName: 'winField'
                            },
                            {
                                type: Urso.types.objects.IMAGE,
                                name: 'winFieldPanel',
                                assetKey: 'winFieldPanel',
                                anchorX: 0.5,
                                anchorY: 0.5,
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi winFieldValue',
                                text: '',
                                y: 65,
                                wordWrapWidth: 440
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi cheeringText',
                                text: '',
                                y: 10,
                                wordWrapWidth: 440
                            }
                        ]
                    }
               ]
            }
        ];
    };

};

module.exports = AppTemplatesGroupsGroup;
