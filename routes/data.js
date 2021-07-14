const fs = require("fs");
const path = require("path");


function data (app) {

app.get("/api/notes", (req, res) => 
res.sendFile(path.join(__dirname, "../db/db.json")));


    app.post("/api/notes", (req, res) => {

        let newNote = {
            id:Math.random() * 10000000,
            title:req.body.title,
            text:req.body.text
        };

        let note = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8"));
        note.push(newNote);
        fs.writeFileSync("./db/db.json",JSON.stringify(note));
        res.json(note);
    });
};
 module.exports = data;
