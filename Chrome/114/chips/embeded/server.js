
const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
// const privateKey = fs.readFileSync('../../localhost.key', 'utf8');
// const certificate = fs.readFileSync('../../localhost.crt', 'utf8');
const privateKey = fs.readFileSync('../../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };

const app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/', (req, res) => {
    // console.log(req.cookies)
    // res.setHeader('Set-Cookie', 'Iframe-name=embeded; Secure; Path=/; SameSite=None; Partitioned')
    res.sendFile(path.join(__dirname+ '/index.html'));
})

app.get('/prtCookie', (req, res) => {
    console.log('Embeded Cookie:')
    console.log(req.cookies)
    res.send({success: true, message: 'Cookie printed'})
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(9000);
httpsServer.listen(9443);
