const myEmitter = require('./myEmitter');

const listen = (io) => {
  io.on('connect', (socket) => {
    console.log(`user ${socket.id} connected`);

    socket.on('client message', (msg) => {
      io.emit('server message', `${socket.id}: ${msg}`);
      myEmitter.emit('client message', `${socket.id}: ${msg}`)
    });

  });

  myEmitter.on('node-client message', (msg) => {
    io.emit('server message', `node-client: ${msg}`);
  })
};

module.exports = {
  listen
};