const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))



app.listen(1111, function(){
    console.log("Server Started on port 1111")
})