const WebsocketServer = require('ws');

const wss = new WebsocketServer.Server({ port: 8000 });

wss.on('connection', (ws) => {
  ws.on('error', console.error);
  ws.on('message', (data) => {
    console.log('received: %s', data);
  });

  setInterval(() => {
    wss.clients.forEach((element) => {
      if (element.readyState === WebsocketServer.OPEN) {
        element.send('Get count');
      }
    });
  }, 4000);
});
