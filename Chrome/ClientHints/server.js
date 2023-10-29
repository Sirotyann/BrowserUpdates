
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


app.use(express.static('public'));

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(function (request, response, next) {
    response.set(
        'Reporting-Endpoints',
        `main-endpoint="${REPORTING_ENDPOINT_MAIN}"`,
    );
    next();
});

app.get('/', function (req, res) {
    // res.set('Content-Security-Policy', `script-src 'self'; object-src 'none'; report-to main-endpoint`);
    res.set('Accept-CH', 'Viewport-Width, Width, Sec-CH-Prefers-Reduced-Transparency, Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion')
    res.set('Vary', 'Sec-CH-Prefers-Reduced-Transparency, Sec-CH-Prefers-Color-Scheme')
    res.set('Critical-CH', 'Viewport-Width, Width, Sec-CH-Prefers-Reduced-Transparency, Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion')
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/report', function (req, res) {
    console.log('Report: ', req.headers)
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