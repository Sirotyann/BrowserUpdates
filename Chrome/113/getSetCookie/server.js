
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const users = [{ name: 'Harry Potter' }];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/single', (req, res) => {
    res.setHeader('Set-Cookie', 'single=v; Max-Age=10000')
    // res.setHeader('Set-Cookie', 'single=v2; Max-Age=10000')
    console.log(res.getHeader('Set-Cookie'))
    res.json(users)
})

app.get('/multiple', (req, res) => {
    // res.setHeader('Set-Cookie', 'test5=v; Max-Age=10000')
    // res.setHeader('Set-Cookie', 'test6=v; Max-Age=10000')
    res.setHeader('Set-Cookie', ['multiple_1=1; Max-Age=10000', 'multiple_2=2; Max-Age=10000'])
    console.log(res.getHeader('Set-Cookie'))
    res.json(users)
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})