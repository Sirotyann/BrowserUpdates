
const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../localhost-key.pem')
const certificate = fs.readFileSync('../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
const bodyParser = require('body-parser')
const open = require('open')

const app = express()
const domain = 'localhost';

app.use(express.static('public'));

app.use(bodyParser.text());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/clear', function (req, res) {
    // console.log('beacon: ', req.body)
    res.set('Clear-Site-Data', '"cookies", "storage"');
    res.sendFile(path.join(__dirname + '/clear.html'));
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

open(`https://${domain}:8443`)