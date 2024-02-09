const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = 8000;
//const userRoute = require("./routes/users");
//const authRoute = require("./routes/auth");
const bookRoute = require("./routes/books");
const userRoute = require("./routes/users")
const stationRoute = require("./routes/stations")
const trainRoute = require("./routes/trains")
//const conversationRoute = require("./routes/conversations");
//const messageRoute = require("./routes/messages");
const cors = require('cors');

//to use dotenv
dotenv.config();

//mongodb connection with mongoose
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("connected to Mongodb");
})
.catch((error) => {
    // Handle any connection errors
    console.error('Error connecting to the database:', error);
});

//middlewires
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());


//router
//app.use("/api/books", bookRoute);
app.use("/api/users", userRoute)
app.use("/api/stations", stationRoute)
app.use("/api/trains", trainRoute)
//how can we listen this application
//port will be 8800
app.listen(port, ()=> {
    console.log(`Server is running at : ${port}`);
})
