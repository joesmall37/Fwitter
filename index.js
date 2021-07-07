const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const authRoute = require("./routes/api/auth");
// const userRoute = require("./routes/api/users");
// const postRoute = require("./routes/api/posts");
const categoryRoute = require("./routes/api/categories");
const multer = require("multer");
const path = require("path");

// dotenv config
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});





const session = require('express-session');

const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/[ insert your db name here ]";
// session
var MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
store.on('error', function (error) {
  console.log(error);
});
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'This is a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store
};
// mongoose
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);
// express app
const app = express();
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
