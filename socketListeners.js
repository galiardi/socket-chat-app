const listen = (io) => {
  io.on('connect', (socket) => {
    console.log(`user ${socket.id} connected`);

    socket.on('client message', (msg) => {
      io.emit('server message', `${socket.id}: ${msg}`);
    });
    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
    });
  });
};

module.exports = {
  listen,
};
