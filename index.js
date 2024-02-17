const express = require('express')
const mongoose = require('mongoose');
const app = express()
const idCardRoute = require("./routes/idCard")

// middelware
app.use(express.json());

// routes
app.use("/", idCardRoute)

mongoose.connect("Your mongo db url")
.then(() => {
    console.log('Connected! YOU ARE CONNECTED TO YOUR DATABASE!') 
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
}).catch(() => console.log('faild! YOU ARE NOT CONNECTED TO YOUR DATABASE!'))