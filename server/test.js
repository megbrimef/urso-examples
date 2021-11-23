const WebSocket = require('ws');

const ws = new WebSocket('ws://ursojs.io:9091');

ws.on('open', function open() {
  console.log('open')
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});
