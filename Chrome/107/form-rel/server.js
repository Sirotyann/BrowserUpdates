const express = require('express')
const path = require('path');
const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/result', function (req, res) {
    console.log('result', req.get('referer'))
    res.sendFile(path.join(__dirname + '/result.html'));
});

app.get('/submit', function (req, res) {
    console.log('submit', req.get('referer'))
    res.sendFile(path.join(__dirname + '/result.html'));
});

app.use(express.static('public'));

app.listen(3000)