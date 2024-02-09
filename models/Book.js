// //to create a model we require  mongoose
// const mongoose = require("mongoose");

// //creating UserSchema
// const BookSchema = new mongoose.Schema({
//     bookname:{
//         type: String,
//         required: true,
//         min: 3,
//         max: 20,
//         unique: true
//     },
//     title:{
//         type: String,
//         required: true,
//         min: 3,
//         max: 20,
//         unique: true
//     },
//     author: {
//         type: String,
//         required: true,
//         min: 3,
//         max: 20
//     },
//     genre: {
//         type: String,
//         required: true,
//         min: 3,
//         max: 20
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// }, {timestamps : true} );
// module.exports = mongoose.model("Book", BookSchema);

// //timestamps : when updating or create this schema it will automatically update


// // {
// //     "id": integer, # A numeric ID
// //     "title": "string", # A book title string
// //     "author": "string", # A book author string
// //     "genre": "string", # A genre string
// //     "price": float # A real number price
// // }