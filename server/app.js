const conn = require("./conn");
const express = require("express")
const app = require("express")();
const room = require("./routes/room");
const user = require("./routes/user")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/rooms", room)
app.use("/", user)


app.listen(8000)