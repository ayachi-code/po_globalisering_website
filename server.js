const express = require('express');
const app = express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log("server running....");
