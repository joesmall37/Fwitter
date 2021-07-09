const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.get('/checkAuth', async (req, res) => {
  const { logged_in, user_id } = req.session;
  try {
    if (logged_in, user_id) {
      const loggedInUser = await User.findById(user_id);

      if (loggedInUser) {
        const { password, ...userData } = loggedInUser.toObject();
        res.status(200).json(userData);
      }
      res.status(404).end();
    }
    res.status(404).end();
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})


router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      const { password, ...userData } = user.toObject();;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");
    console.log(user)

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");
    console.log(1)


    req.session.save(() => {
      console.log(2)
      req.session.user_id = user.id;
      req.session.logged_in = true;
      const { password, ...userData } = user.toObject();;
      console.log(3)
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
