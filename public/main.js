const socket = io();

socket.on('connect', () => console.log('socket connected'));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value === '') return;

  socket.emit('client message', input.value);

  input.value = '';
});

socket.on('server message', (msg) => {
  messages.innerHTML += `<p>${msg}</p>`;
});
