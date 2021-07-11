const express = require('express');
const path = require('path');

const { v4: uuid } = require('uuid');

module.exports = function(app) {
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  

  // here is the issue
app.post('/api/notes', (req, res) => {
    let newNote = {
      id:uuid(),
      title:req.body.title,
      text:req.body.text
    };
    let prevNote = JSON.parse(fs.readFileSync(path.join(_dirname,'../db/db.json'), 'utf-8'));
    prevNote.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify(prevNote));
     res.json(prevNote);
  });
})};

