const mongoose = require("mongoose");
const StopSchema = new mongoose.Schema({
    station_id: {
        type: Number,
        required: true
    },
    arrival_time: {
        type: String,
        required: true
    },
    departure_time: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    }
});

const TrainSchema = new mongoose.Schema({
    train_id: {
        type: Number,
        required: true,
        unique: true
    },
    train_name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    stops: {
        type: [StopSchema],
        required: true,
        validate: {
            validator: function (stops) {
                return stops.length >= 2;
            },
            message: 'At least two stops are required'
        }
    }
}, {timestamps : true});

module.exports = mongoose.model("Train", TrainSchema);