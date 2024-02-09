// const router = require("express").Router();
// //const Book = require("../models/Post");
// const Book = require("../models/Book");


// router.post("/", async(req, res) => {
//     const newBook = new Book(req.body);
//     try {
//         const savedBook = await newBook.save();
//         res.status(200).json(savedBook);
//     } catch(err) {
//         res.status(500).json(err);
//     }
// });
// router.get("/:id", async(req, res) => {
//     try {
//         const book = await Book.findById(req.params.id);
//         res.status(200).json(book);
//     }catch(err) {
//         res.status(500).json(err);
//     }
// })
// router.get("/", async(req, res) => {
//     //const user = await User.findOne({username: req.params.username});
//     try {
//         const books =  await Book.find()
//         res.status(200).json(books);
//     } catch(err) {
//         res.status(500).json(err);
//     }
// })

// router.get('/', (req, res) => {
//     // Extract parameters from the query string
//     const searchField = req.query.search_field;
//     const searchValue = req.query.value;
//     const sortField = req.query.sort;
//     const sortOrder = req.query.order || 'asc'; // Default to ascending order if not provided
  
//     // Perform the search based on parameters
//     //let filteredBooks = booksDatabase;
//     let filteredBooks = Book.find()
  
//     if (searchField && searchValue) {
//       filteredBooks = filteredBooks.filter(book => book[searchField] === searchValue);
//     }
  
//     // Sorting logic
//     if (sortField) {
//       filteredBooks.sort((a, b) => {
//         const aValue = a[sortField];
//         const bValue = b[sortField];
  
//         if (aValue < bValue) {
//           return sortOrder === 'asc' ? -1 : 1;
//         } else if (aValue > bValue) {
//           return sortOrder === 'asc' ? 1 : -1;
//         } else {
//           return 0;
//         }
//       });
//     }
//     res.json(filteredBooks);
//   });
// module.exports = router;