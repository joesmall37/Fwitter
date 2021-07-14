const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");
const session = require('express-session');
const http = require ('http');
const { Server } = require ('socket.io');

dotenv.config();

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify:true
//   })
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/workoutnetwork',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


var MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
});
store.on('error', function (error) {
  console.log(error);
});
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionOptions));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// listen at port

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
