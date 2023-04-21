const path = require('path');
const express = require('express');
const helmet = require('helmet');
const myEmitter = require('./myEmitter');
// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();
// myEmitter.on('node-client message', (msg) => console.log(msg));

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/node-clients', (req, res) => {
  console.log('message recived');
  const { message } = req.query;
  myEmitter.emit('node-client message', message);
  res.end();
});

app.get('/sse', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive'
  });

  const onMessage = (msg) => {
    res.write(`data: ${msg}\n\n`);
  }

  myEmitter.on('client message', onMessage);

  res.on('close', () => {
    myEmitter.off('client message', onMessage);
  });

});


module.exports = app;