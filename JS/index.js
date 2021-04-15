const port = 3000;
const express = require('express')
const indexRouter = require('./routing')

const app = express()

require('./config/express')(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter);

app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`))