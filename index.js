const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const session = require('express-session');
const routes = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGO_URL,
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
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log("Server is currently running at " + PORT);
});
