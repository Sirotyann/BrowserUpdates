
const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../localhost-key.pem')
const certificate = fs.readFileSync('../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
const open = require('open');
const bp = require('body-parser')

const app = express()
const domain = 'example.com';
const REPORTING_ENDPOINT_MAIN = `https://${domain}:8443/main`
const REPORTING_ENDPOINT_DEFAULT = `https://${domain}:8443/default`;

// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use(function (request, response, next) {
    response.set(
        'Reporting-Endpoints',
        `main-endpoint="${REPORTING_ENDPOINT_MAIN}", default="${REPORTING_ENDPOINT_DEFAULT}"`,
    );
    next();
});

app.get('/', function (req, res) {
    res.set('Content-Security-Policy', `script-src 'self'; object-src 'none'; report-to main-endpoint`);
    res.set('Document-Policy', `document-write=?0;report-to=main-endpoint`);
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/default', function (req, res) {
    console.log('default')
    res.send("OK")
});

app.get('/main', function (req, res) {
    console.log('main', req.body)
    res.send("OK")
});

app.post('/default', function (req, res) {
    console.log('default post', {
        body: req.body
    })
    res.send("OK")
});

app.post('/main', function (req, res) {
    console.log('main post', {
        body: req.body
    })
    res.send("OK")
});

app.get("/clear", (req, res) => {
    res.redirect("/");
});


app.use(express.static('public'));

// app.listen(3000)
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

open('https://example.com:8443')