'use strict';

const express = require('express');
// Constants
const PORT = 9898;
const HOST = 'localhost';

function paddy(n, p, c) {
  var pad_char = typeof c !== 'undefined' ? c : '0';
  var pad = new Array(1 + p).join(pad_char);
  return (pad + n).slice(-pad.length);
}

// App
const app = express();
app.get('/', (req, res) => {
  console.log(req.host);
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  const state = '#' + paddy(Math.floor(Math.random() * 255), 2).toString(16) + paddy(Math.floor(Math.random() * 255), 2).toString(16) + paddy(Math.floor(Math.random() * 255), 2).toString(16);
  res.send(JSON.stringify(
    {
      'state': state
    }
  ))
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
