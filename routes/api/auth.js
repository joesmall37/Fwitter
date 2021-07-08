const router = require("express").Router();
// import user model
const User = require("../../models/User");
const bcrypt = require("bcrypt");

// register api
//REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log(req.query.password)
    // console.log(req.query)
    const salt = await bcrypt.genSalt(8);
    // hash the req.body.password
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      // send data to the model
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    // save the new User to the database
    const user = await newUser.save();
    // if succesfully posted, send status 200
    res.status(200).json(user);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// login api
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // check if there user exists in the database
    !user && res.status(400).json("No user found");

    const validated = await bcrypt.compare(req.body.password, user.password);
    // check if the password matches the one stored in the database
    !validated && res.status(400).json("Wrong Password. Please enter the correct password");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
