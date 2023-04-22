const rl = require('readline');
const http = require('http');
const querystring = require('querystring');

const readline = new rl.Interface({ input: process.stdin });

readline.on('line', (line) => {
  http.get(`http://localhost:3000/node-clients?${querystring.stringify({ message: line })}`)
});

http.get('http://localhost:3000/sse', (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  })
})