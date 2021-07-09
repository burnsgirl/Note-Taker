const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
