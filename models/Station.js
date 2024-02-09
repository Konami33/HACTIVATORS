// Field Type Description
// station_id integer Station's ID
// station_name string Station's name
// longitude float Longitude coordinate
// latitude float Latitude coordinate

const mongoose = require("mongoose");
//creating UserSchema
const StationSchema = new mongoose.Schema({
    station_id:{
        type: Number,
        required: true,   
        unique: true
    },
    station_name:{
        type: String,
        required: true,
        unique: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
}, {timestamps : true} );
module.exports = mongoose.model("Station", StationSchema);