const mongoose = require("mongoose");

//creating UserSchema
const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true
    },
    user_name:{
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    balance: {
        type: Number,
        required: true
    }
}, {timestamps : true} );
module.exports = mongoose.model("User", UserSchema);