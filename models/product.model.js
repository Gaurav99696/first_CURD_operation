const mongoose = require("mongoose");

const IdSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        fName: {
            type: String,
            required: true,
        },
        mName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Id = mongoose.model("ID_CARD", IdSchema)

module.exports = Id