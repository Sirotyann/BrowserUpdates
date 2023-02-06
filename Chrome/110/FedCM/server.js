// const express = require('express')
// const path = require('path');
// const app = express()

// app.get('/demo', function (req, res) {
//     res.sendFile(path.join(__dirname + '/demo.html'));
// });

// app.use(express.static('public'));

// app.listen(9000)


const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
const bodyParser = require('body-parser')
const open = require('open')

const app = express()
// const domain = 'example.com';
const domain = 'localhost';

app.use(express.static('public', {
    setHeaders: function (res, path, stat) {
        res.set('Origin-Trial', 'Aw0/VBaSpR35KUWf94+YZ7ki6LS06lQzGx33SGIyNe5xdvipD71lVfO/ot9xIhZn9+ntQsN6GlPR2Ys98pnJCAoAAABteyJvcmlnaW4iOiJodHRwczovLzEyNy4wLjAuMTo5NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2MTI5OTE5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==');
    }
}));

app.use(function (req, res, next) {
    res.set('Origin-Trial', 'Aw0/VBaSpR35KUWf94+YZ7ki6LS06lQzGx33SGIyNe5xdvipD71lVfO/ot9xIhZn9+ntQsN6GlPR2Ys98pnJCAoAAABteyJvcmlnaW4iOiJodHRwczovLzEyNy4wLjAuMTo5NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2MTI5OTE5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==');
    next();
});

app.use(bodyParser.text());

app.get('/', function (req, res) {
    res.header('Permissions-Policy', 'identity-credentials-get');
    res.header('identity-credentials-get', 'true');
    res.sendFile(path.join(__dirname + '/demo.html'));
});



app.get('/manifest', function (req, res) {
    res.json({
        "accounts_endpoint": "/accounts",
        "client_metadata_endpoint": "/metadata",
        "id_assertion_endpoint": "/assertion",
        "id_token_endpoint":"/auth/idtokens",
        "revocation_endpoint":"/auth/revoke",
        "branding": {
            "background_color": "green",
            "color": "0xFFEEAA",
            "icons": [
                {
                    "url": "https://127.0.0.1:9000/icon.ico",
                    "size": 25
                }
            ]
        }
    })
});

app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

open(`https://${domain}:8443`)