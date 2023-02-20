const express = require('express')
const mongoose = require('mongoose');
const atmRoutes = require('./routers/atm')

const app = express()

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://pranto:pranto2098@mfinance.po0gfev.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected Database'))

app.use(express.json())

app.use('/atm', atmRoutes)

app.listen(3000)