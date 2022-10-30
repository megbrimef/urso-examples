class AppTemplatesGroupsUiGroup {
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
                        type: Urso.types.objects.BUTTON,
                        class: 'uiButton spinButton',
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
                        class: 'uiButton skipButton',
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
                        type: Urso.types.objects.TOGGLE,
                        class: 'uiButton autoButton',
                        x: 244,
                        y: 916,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            pressedOver: 'autoPressed',
                            pressedOut: 'autoPressed',
                            pressedDisabled: 'autoPressed',
                            pressedDown: 'autoPressed',
                            unpressedOver: 'autoUnpressed',
                            unpressedOut: 'autoUnpressed',
                            unpressedDown: 'autoUnpressed',
                            unpressedDisabled: 'autoUnpressed'
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
                        class: 'uiButton lineIncreaseCircularButton',
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
                        class: 'uiButton betIncreaseCircularButton',
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
                        class: 'baseUi btn-text',
                        text: 'BET ONE',
                        x: 619,
                        y: 1017,
                        wordWrapWidth: 440
                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        class: 'uiButton betMaxButton',
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
                                type: Urso.types.objects.IMAGE,
                                name: 'winFieldPanel',
                                assetKey: 'winFieldPanel',
                                anchorX: 0.5,
                                anchorY: 0.5,
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi winVal',
                                text: '',
                                y: 65,
                                fontSize: 40,
                                maxWidth: 200,
                                wordWrapWidth: 440
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi cheeringText',
                                text: 'Good Luck',
                                y: 10,
                                wordWrapWidth: 440,
                                maxWidth: 200
                            }
                        ]
                    }
               ]
            }
        ];
    };

};

module.exports = AppTemplatesGroupsUiGroup;
