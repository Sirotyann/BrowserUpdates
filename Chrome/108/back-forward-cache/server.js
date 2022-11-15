
const express = require('express')
// const open = require('open')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../localhost.pem')
const credentials = { key: privateKey, cert: certificate };
// const bodyParser = require('body-parser')

app.get('/error', function (req, res) {
    res.sendStatus(502)
});

app.use(express.static('public'));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//     // open(`http://localhost:${port}`)
// })


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
