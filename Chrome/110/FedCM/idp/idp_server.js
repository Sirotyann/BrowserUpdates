const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
const bodyParser = require('body-parser')
const open = require('open')

const app = express()
// const domain = 'example.com';
const domain = 'localhost';

app.use(express.static('public'));

// app.use(function (req, res, next) {
//     res.set('Origin-Trial', 'Aw0/VBaSpR35KUWf94+YZ7ki6LS06lQzGx33SGIyNe5xdvipD71lVfO/ot9xIhZn9+ntQsN6GlPR2Ys98pnJCAoAAABteyJvcmlnaW4iOiJodHRwczovLzEyNy4wLjAuMTo5NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2MTI5OTE5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==');
//     next();
// });

app.use(bodyParser.text());

// app.get('/', function (req, res) {
//     res.header('Permissions-Policy', 'identity-credentials-get=*');
//     // res.header('identity-credentials-get', 'true');
//     res.sendFile(path.join(__dirname + '/demo.html'));
// });

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
    res.json({
        "accounts_endpoint": "/accounts",
        "client_metadata_endpoint": "/metadata",
        "id_assertion_endpoint": "/assertion",
        "branding": {
            "background_color": "0x6200ee",
            "color": "0xffffff",
            "icons": [
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
    res.json({
        accounts: [
            {
                id: "id_00001",
                name: "lc",
                email: "Cheng.Li@Mindgeek.com",
                approved_clients: ["123"]
            }
        ]
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
    res.json({
        token: "this_is_the_token"
    })
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

open(`https://${domain}:8443`)
