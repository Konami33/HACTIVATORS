// const router = require("express").Router();
// //const Book = require("../models/Post");
// const Train = require("../models/Train");

// router.post('/', (req, res) => {
//     try {
//         const { train_id, train_name, capacity, stops } = req.body;

//         // Check if all required fields are present
//         if (!train_id || !train_name || !capacity || !stops || stops.length < 2) {
//             return res.status(400).json({ error: 'Missing required fields or minimum two stops required' });
//         }

//         // Check if train with the same ID already exists
//         for (const train of trains) {
//             if (train.train_id === train_id) {
//                 return res.status(409).json({ error: 'Train with the same ID already exists' });
//             }
//         }
//         // Add the train to the data store
//         trains.push({ train_id, train_name, capacity, stops });

//         // Return the created train
//         res.status(201).json({ train_id, train_name, capacity, stops });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
// module.exports = router;

const router = require("express").Router();
const Train = require("../models/Train");

router.post('/', async (req, res) => {
    try {
        const { train_id, train_name, capacity, stops } = req.body;

        // Check if all required fields are present
        if (!train_id || !train_name || !capacity || !stops || stops.length < 2) {
            return res.status(400).json({ error: 'Missing required fields or minimum two stops required' });
        }

        // Check if train with the same ID already exists in the database
        const existingTrain = await Train.findOne({ train_id });
        if (existingTrain) {
            return res.status(409).json({ error: 'Train with the same ID already exists' });
        }

        // Create a new train document
        const newTrain = new Train({
            train_id,
            train_name,
            capacity,
            stops
        });

        // Save the new train to the database
        await newTrain.save();

        // Return the created train
        res.status(201).json(newTrain);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
