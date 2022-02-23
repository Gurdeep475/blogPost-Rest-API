const express = require('express')
const app = express();
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home')
require('dotenv/config')
// Routes
app.use('/',homeRoutes)

mongoose.connect(process.env.DB_CONNECTION)
.then((result) => {
    console.log("Connected");
    app.listen(3000);   // listening to port 3000
})
.catch(err => console.log(err));