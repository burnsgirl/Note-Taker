const express = require('express');
const path = require('path');
const getInfo = require("./Develop/public/Routes/get");
const postInfo = require("./Develop/public/Routes/post");


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('${_dirname}/public'));
app.use(getInfo);
app.use(postInfo);
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


//post works directly with json
//db is an array, so should be left empty bc it holds info getting put onto page
//save post array to db json
//follow hot restaurant file build