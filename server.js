const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/data')(app);
require('./routes/view')(app);



app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
});


