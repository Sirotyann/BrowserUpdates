
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
// const domain = 'example.com';
const domain = 'localhost';
const REPORTING_ENDPOINT_MAIN = `https://${domain}:8443/report`

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(function (request, response, next) {
    response.set(
        'Reporting-Endpoints',
        `main-endpoint="${REPORTING_ENDPOINT_MAIN}"`,
    );
    next();
});

app.get('/', function (req, res) {
    res.set('Content-Security-Policy', `script-src 'self'; object-src 'none'; report-to main-endpoint`);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/report', function (req, res) {
    console.log('Report: ', req.body)
    res.send("OK")
});

app.get("/clear", (req, res) => {
    res.redirect("/");
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

open(`https://${domain}:8443`)