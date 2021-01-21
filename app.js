const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello travis');
});

const server = app.listen(3000, () => {
  console.log('Running on 3000');
});

module.exports = server;