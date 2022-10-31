const express = require('express')
const path = require('path');
const app = express()

app.get('/', function (req, res) {
    console.log("root page")
    // res.header('Permissions-Policy', 'fullscreen=(self "http://local.test.com:3000")');
    res.header('Permissions-Policy', 'fullscreen=(self "http://*.test.com:3000")');
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));

app.listen(3000)