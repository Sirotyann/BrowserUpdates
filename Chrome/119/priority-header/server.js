
const express = require('express')
const fs = require('fs')
const spdy = require('spdy')
const path = require('path')
const open = require('open')
const app = express()
const port = 8443
const bodyParser = require('body-parser');

const privateKey = fs.readFileSync('../../../localhost-key.pem')
const certificate = fs.readFileSync('../../../localhost.pem')

app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log('home: ', req.headers)
});

app.get('/inner', function (req, res) {
    console.log('inner: ', req.headers)
    res.sendFile(path.join(__dirname + '/inner.html'));
});

app.get('/hello', async function (req, res) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.setHeader('Priority', `urgency=${10-req.query.index}`)
    res.json({ index: req.query.index, priority: req.query.priority })
    console.log('hello: ' + req.query.index, req.query.priority)
});


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//     // open(`http://local.test.com:${port}`)
// })

const server = spdy.createServer({
    key: privateKey,
    cert: certificate
}, app);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log('SSL enabled');
});