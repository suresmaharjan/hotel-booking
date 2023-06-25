const express = require("express")
const router = express.Router()
const Room = require("../models/room")
router.get("/", async (req, res) => {
    const room = await Room.find()
    res.json(room)
})

module.exports = router