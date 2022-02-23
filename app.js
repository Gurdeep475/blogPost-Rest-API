const express = require('express')
const app = express();
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home')
const postRoutes = require('./routes/post')
const boydParser = require('body-parser')
const cors = require('cors');

require('dotenv/config')
// Routes
//req preprosessing
app.use(cors());
app.use(boydParser.json())
// --------------------
// Routes starts from here

app.use('/',homeRoutes);
app.use('/posts',postRoutes)



// Error Handling Middleware
app.use((err,req,res,next) => {
    res.json(err);
})


mongoose.connect(process.env.DB_CONNECTION)         //Connect to the database
.then((result) => {
    console.log("Connected");
    app.listen(3000);   // listening to port 3000
})
.catch(err => console.log(err));