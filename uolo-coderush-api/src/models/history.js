const express = require("express");
const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    numberOfChances:{
        type: Number,
        required: true
    }
})

const History = new mongoose.model("GameHistory", historySchema);
module.exports = History;