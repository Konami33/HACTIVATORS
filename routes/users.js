const router = require("express").Router();
//const Book = require("../models/Post");
const User = require("../models/User");

router.post("/", async(req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});
module.exports = router;