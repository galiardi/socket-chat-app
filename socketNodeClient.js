const rl = require('readline');
const io = require('socket.io-client'); 

const readline = rl.createInterface({input: process.stdin});

const socket = io('http://localhost:3000');


socket.on('connect', () => {
  console.log('Conectado al servidor socket.io');
  
  socket.on('server message', (msg) => {
      console.log(msg);
  });

  readline.on('line', (line) => {
    socket.emit('client message', line);
  })

});
