const mongoose = require("mongoose");
const roomSchema =  new mongoose.Schema({
    name: String,
    imageurls: [],
    rentperday: Number,
    type: String,
    maxcount: Number,
    phonenumber: Number,
    currentbookings: [],
    description: String
})

const Room = mongoose.model("room", roomSchema)
module.exports = Room



