
const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
// const privateKey = fs.readFileSync('../../localhost.key')
// const certificate = fs.readFileSync('../../localhost.crt')
const privateKey = fs.readFileSync('../../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };

const domain = 'first.com'

const app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/', function (req, res) {
    res.setHeader('Set-Cookie', 'First=site; Secure; Path=/; SameSite=None;')
    res.sendFile(path.join(__dirname+ '/index.html'));
});

app.get('/hello', function (req, res) {
    // res.setHeader('Set-Cookie', 'First=site; Secure; Path=/; SameSite=None;')
    res.sendFile(path.join(__dirname+ '/hello.html'));
});

app.get('/prtCookie', (req, res) => {
    console.log('First Cookie:')
    console.log(req.cookies)
    res.send({success: true, message: 'Cookie printed'})
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

const open = require('open')
open(`https://${domain}:8443/`)