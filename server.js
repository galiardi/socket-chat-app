const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const socketListeners = require('./socketListeners')

const server = http.createServer(app);
const io = new Server(server);
socketListeners.listen(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});