require('@urso/core');
require('./app/config/load');

Urso.App.App = require('./app/app.js');
window.onload = Urso.runGame;
