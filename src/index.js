const express = require('express')

const HOST = '0.0.0.0'
const EXPRESS_APP_PORT = 3000

const app = express()
console.log("executou 20")

app.get('/', (req, res) =>{
    res.send("OI DOCKER 3")
})

app.get('/oi', (req, res) =>{
    res.send("OI DOCKER 3")
})

app.listen(EXPRESS_APP_PORT,HOST)