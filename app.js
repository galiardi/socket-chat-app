const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/download-node-client', (req, res) => {
  const readFile = fs.createReadStream('node-client.zip');

  readFile.pipe(res);

  readFile.on('error', (err) => {
    console.log(err);
    res.status(500).send('Error al leer el archivo');
  });
})

module.exports = app;