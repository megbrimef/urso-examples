class AppTemplatesGroupsUiGroup {
    constructor() {
        const _uiPath = 'assets/images/ui';

        this.styles = {
            '.baseUi': {
                fontFamily: 'Arial',
                anchorX: 0.5,
                anchorY: 0.5,
                fontSize: 20,
                fill: '#fff',
                stroke: '#6f1db9',
                strokeThickness: 1,
                wordWrap: true,
            },
            // '.winFieldValue': {
            //     fontSize: 46,
            // },
            // '.cheeringText': {
            //     fontSize: 44,
            // },
            // '.linesVal': {
            //     fontSize: 32,
            // }
        };

        this.assets = [
            { type: Urso.types.assets.IMAGE, key: 'minusPressed', path: `${_uiPath}/button1_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'minus', path: `${_uiPath}/button1.png` },

            { type: Urso.types.assets.IMAGE, key: 'plusPressed', path: `${_uiPath}/button2_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'plus', path: `${_uiPath}/button2.png` },

            { type: Urso.types.assets.IMAGE, key: 'speedupPressed', path: `${_uiPath}/speedup_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'speedup', path: `${_uiPath}/speedup.png` },

            { type: Urso.types.assets.IMAGE, key: 'speedupActivePressed', path: `${_uiPath}/button3_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'speedupActive', path: `${_uiPath}/button3.png` },

            { type: Urso.types.assets.IMAGE, key: 'addBalancePressed', path: `${_uiPath}/button4_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'addBalance', path: `${_uiPath}/button4.png` },

            { type: Urso.types.assets.IMAGE, key: 'startButtonPressed', path: `${_uiPath}/start_button_pressed.png` },
            { type: Urso.types.assets.IMAGE, key: 'startButton', path: `${_uiPath}/start_button.png` },

            // { type: Urso.types.assets.IMAGE, key: 'doubleUnpressed', path: `${_uiPath}/buttons/double_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'doublePressed', path: `${_uiPath}/buttons/double_pressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'linesUnpressed', path: `${_uiPath}/buttons/lines_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'linesPressed', path: `${_uiPath}/buttons/lines_pressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'oneBetUnpressed', path: `${_uiPath}/buttons/one_bet_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'oneBetPressed', path: `${_uiPath}/buttons/one_bet_pressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'maxBetUnpressed', path: `${_uiPath}/buttons/max_bet_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'maxBetPressed', path: `${_uiPath}/buttons/max_bet_pressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'backUnpressed', path: `${_uiPath}/buttons/back_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'infoUnpressed', path: `${_uiPath}/buttons/info_unpressed.png` },
            // { type: Urso.types.assets.IMAGE, key: 'winFieldPanel', path: `${_uiPath}/panels/win_panel.png` },
            // { type: Urso.types.assets.IMAGE, key: 'creditPanel', path: `${_uiPath}/panels/credit_panel.png` },
            // { type: Urso.types.assets.IMAGE, key: 'totalBetPanel', path: `${_uiPath}/panels/total_bet_panel.png` },
        ];

        this.objects = [
            {
                type: Urso.types.objects.CONTAINER,
                name: 'uiContainer',
                contents: [
                    {
                        type: Urso.types.objects.COMPONENT,
                        name: 'betCom',
                        componentName: 'bet'

                    },
                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'betMinus',
                        x: 299,
                        y: 691,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'minus',
                            out: 'minus',
                            pressed: 'minusPressed',
                            disabled: 'minus'
                        },
                    },

                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'betPlus',
                        x: 584,
                        y: 691,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'plus',
                            out: 'plus',
                            pressed: 'plusPressed',
                            disabled: 'plus'
                        },
                    },

                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'speedup',
                        x: 1127,
                        y: 691,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'speedup',
                            out: 'speedup',
                            pressed: 'speedupPressed',
                            disabled: 'speedup'
                        },
                    },

                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'addBalance',
                        x: 222,
                        y: 735,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'addBalance',
                            out: 'addBalance',
                            pressed: 'addBalancePressed',
                            disabled: 'addBalance'
                        },
                    },

                    {
                        type: Urso.types.objects.BUTTON,
                        name: 'spin',
                        x: 1260,
                        y: 666,
                        anchorX: 0.5,
                        anchorY: 0.5,
                        buttonFrames: {
                            over: 'startButton',
                            out: 'startButton',
                            pressed: 'startButtonPressed',
                            disabled: 'startButton'
                        },
                    },


                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'creditPanelContainer',
                        x: 170,
                        y: 735,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'balanceCom',
                                componentName: 'balance'
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi balanceText',
                                text: 'Balance:',
                                wordWrapWidth: 440,
                                x: -120
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi balanceVal',
                                text: '',
                                anchorX: 1,
                                x: 20,
                                wordWrapWidth: 440
                            }
                        ]
                    },
                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'totalBetPanelContainer',
                        x: 445,
                        y: 690,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'totalBetCom',
                                componentName: 'totalBet'
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi totalBetText',
                                text: 'Total Bet',
                                y: -12,
                                wordWrapWidth: 440
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi totalBetVal',
                                text: '',
                                y: 12,
                                wordWrapWidth: 440
                            }
                        ]
                    },
                    {
                        type: Urso.types.objects.CONTAINER,
                        name: 'winPanelFieldContainer',
                        x: 820,
                        y: 633,
                        contents: [
                            {
                                type: Urso.types.objects.COMPONENT,
                                name: 'winFieldCom',
                                componentName: 'winField'
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi winFieldValue',
                                text: '',
                                y: 67,
                                wordWrapWidth: 440
                            },
                            {
                                type: Urso.types.objects.TEXT,
                                class: 'baseUi cheeringText',
                                text: '',
                                y: 46,
                                wordWrapWidth: 440
                            }
                        ]
                    }
                ]
            }
        ];
    };

};

module.exports = AppTemplatesGroupsUiGroup;
