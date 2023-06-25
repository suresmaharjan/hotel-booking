const mongoose = require("mongoose");
const conn = mongoose.connect("mongodb://127.0.0.1:27017/hotel-booking")
    .then(() => console.log("connected"))
    .catch(err => console.log(err.message))

module.exports = conn