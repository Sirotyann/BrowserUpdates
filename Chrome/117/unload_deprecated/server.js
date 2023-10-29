
const express = require('express')
const path = require('path')
const open = require('open')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

let index = 0;
app.use(bodyParser.json());
app.get('/', function (req, res) { 
    // console.log(`index ${index++} -----------------------`)
    // res.set('Content-Security-Policy', 'prefetch-src http://192.168.0.100:9000/hello');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/message', function (req, res) { 
    index++;
    console.log(`[${index}] get message: ${req.query.message}`);
});
// app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // open(`http://local.test.com:${port}`)
})
