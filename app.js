const express = require('express')
const app = express();

// Routes
app.get('/',(req,res,next) => {
    res.send("Hello World")
})

app.listen(3000);   // listening to port 3000