const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
const bodyParser = require('body-parser')

const app = express()
// const domain = 'example.com';
const domain = 'localhost';

app.use(express.static('public'));

app.use(bodyParser.text());

let users = new Set()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/login', function (req, res) {
    const name = JSON.parse(req.body).username
    console.log(`--- login with name ${name} ---`)
    users.add(name)
    res.json({success: true})
});

app.post('/logout', function (req, res) {
    const name = JSON.parse(req.body).username
    console.log(`--- logout with name ${name} ---`)
    users.delete(name)
    res.json({success: true})
});

app.get('/.well-known/web-identity', function (req, res) {
    console.log("--- get well-known ---")
    res.json({
        provider_urls: [
            `https://${domain}:8443/config`
        ]
    })
});

app.get('/config', function (req, res) {
    console.log("--- get config ---")
    console.log("header", req.headers)
    res.json({
        "accounts_endpoint": "/accounts",
        "client_metadata_endpoint": "/metadata",
        "id_assertion_endpoint": "/assertion",
        branding: {
            background_color: "0x6200ee",
            color: "0xffffff",
            icons: [
                {
                    "url": `https://${domain}:8443/icon.ico`,
                    "size": 25
                }
            ]
        }
    })
});

app.get('/accounts', function (req, res) {
    console.log("--- get accounts ---")
    console.log("headers", req.headers)
    console.log("users", users)
    res.json({
        accounts: Array.from(users).map(name => ({
            id: name,
            name,
            email: `${name}@Mindgeek.com`,
            approved_clients: ["123"]
        }))
    })
});

app.get('/metadata', function (req, res) {
    console.log("--- get metadata ---")
    res.json({
        privacy_policy_url: `https://${domain}:8443/privacy_policy.html`,
        terms_of_service_url: `https://${domain}:8443/terms_of_service.html`
    })
});

app.post('/assertion', function (req, res) {
    console.log("--- get assertion ---")
    console.log("headers", req.headers)
    const username = req.headers.cookie.split("=")[1];
    
    res.json({
        token: `token_for_user_${username}`
    })
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
