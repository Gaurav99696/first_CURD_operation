const express = require('express')
const Id = require("../models/product.model")
const router = express.Router()

router.post("/makeId", async (req, res) => {
    try{
        const data = req.body
        const idCardCreated = await Id.create(data)
        res.status(200).send(idCardCreated)
    }catch(err){
        res.send("Internal Server Error")
    }
})

router.get("/get/:id", async (req, res) => {
    try{
        const id = req.params.id
        const idCardGet = await Id.findById(id)
        res.status(200).send(idCardGet)
    }catch(err){
        res.send("Internal Server Error")
    }
})

router.patch("/update/:id", async (req, res) => {
    try{
        const id = req.params.id
        const data = req.body
        const idCardUpdated = await Id.findByIdAndUpdate(id, data, { new: true })
        res.status(200).send(idCardUpdated)
    }catch(err){
        res.send("Internal Server Error")
    }
})

router.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id
        const idCardDelete = await Id.findByIdAndDelete(id)
        res.status(200).send("Sucsess")
    }catch(err){
        res.send("Internal Server Error")
    }
})

module.exports = router