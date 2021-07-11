const express = require('express');
const get = express.Router();
const path = require('path');

get.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  get.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = get;