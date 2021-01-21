const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('INCROYABLE DES CULS.');
});

const server = app.listen(8080, () => {
  console.log('Running on 8080');
});

module.exports = server;