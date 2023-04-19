const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;