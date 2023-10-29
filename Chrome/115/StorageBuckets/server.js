// const express = require('express')
// const path = require('path');
// const app = express()

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.get('/data', function (req, res) {
//     res.sendFile(path.join(__dirname + '/data.txt'));
// });

// app.use(express.static('public'));

// app.listen(3000)


const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };


const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/cache', function (req, res) {
    res.sendFile(path.join(__dirname + '/cache.html'));
});

app.get('/data', function (req, res) {
    res.sendFile(path.join(__dirname + '/data.txt'));
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

// const open = require('open')
// open(`https://${domain}:8443/`)