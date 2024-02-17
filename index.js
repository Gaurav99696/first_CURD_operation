const express = require('express')
const mongoose = require('mongoose');
const app = express()
const idCardRoute = require("./routes/idCard")

// middelware
app.use(express.json());

// routes
app.use("/", idCardRoute)

mongoose.connect("mongodb+srv://gauravmishra99696:FSWD1234@cluster0.4gbyrw3.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected! YOU ARE CONNECTED TO YOUR DATABASE!') 
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
}).catch(() => console.log('faild! YOU ARE NOT CONNECTED TO YOUR DATABASE!'))