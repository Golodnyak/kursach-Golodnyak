const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')


const app = express()
//some 

app.use('/', serveStatic(path.join(__dirname, 'dist')))

app.get(/.*/,function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 9000
app.listen(port)
console.log(`app listen port: ${port}`)