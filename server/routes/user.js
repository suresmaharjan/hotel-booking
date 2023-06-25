const User = require("../models/user");
const router = require("express").Router()

router.post("/register", async (req, res) => {
    const user = new User(req.body)
    await user.save()
    console.log(req.body)
    res.send(user)

})

module.exports = router;