
const express = require('express')
const path = require('path')
const open = require('open')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/clear', function (req, res) { 
    res.setHeader('Clear-Site-Data', '"*"')
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // open(`http://local.test.com:${port}`)
})
