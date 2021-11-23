const WebSocket = require('ws');
const gameConfig = require('./config/baseConfig');
const { port, host } = require('./config/serverConfig');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const spinConfig = require('./spinConfig');

const portToStart = argv.port || argv.p || port;
const wss = new WebSocket.Server({ port: portToStart, host: host })
const Mapper = require('./gameLogic/mapper');
const localData = require('./gameLogic/localData');

const mapper = new Mapper(gameConfig);

function setDefaults() {
  localData.set('config.base', gameConfig);
  localData.set('balance.amount', gameConfig.starterBalance);
  localData.set('balance.currency', gameConfig.currency);
  localData.set('config.spin', spinConfig);
};

console.log(`Server started on ${portToStart} port.`);

wss.on('connection', ws => {
  setDefaults();

  ws.on('message', message => {
    try {
      console.log(`Received message => ${message}`)
      const result = mapper.makeResponse(message);
      console.log(`Send response => ${result}`)
      ws.send(result);
    } catch (error) {
      console.error(error.message);
    }
  });
});
