const User = require("../models/user");
const router = require("express").Router()

router.post("/register", async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.send(user)
})

router.post("/login", async (req, res) => {
    const result = await User.find({ email: req.body.email })
    res.send(result)
})

module.exports = router;