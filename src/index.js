// require('@urso/core');
// require('@urso/slot-base');
require('@urso/core/src/js/index');
require('@urso/slot-base/src/js/index');

require('./app/config/load');

window.onload = Urso.runGame;
