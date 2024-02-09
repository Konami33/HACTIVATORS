const router = require("express").Router();
//const Book = require("../models/Post");
const Station = require("../models/Station");

router.post("/", async(req, res) => {
    const newStation = new Station(req.body);
    try {
        const savedStation = await newStation.save();
        res.status(200).json(savedStation);
    } catch(err) {
        res.status(500).json(err);
    }
});
module.exports = router;