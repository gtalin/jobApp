const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
const app = express()

//needed when we have views and an engine like ejs and 
//we do res.render to render the file
//here we're just serving a static file. 
//app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('/index.html'))


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


