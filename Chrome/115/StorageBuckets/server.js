const express = require('express')
const path = require('path');
const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function (req, res) {
    res.sendFile(path.join(__dirname + '/data.txt'));
});

app.use(express.static('public'));

app.listen(3000)