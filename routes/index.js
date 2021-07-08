const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/spindex");
const userRoutes = require("./api/users")
const authRoutes = require("./api/auth")
const postRoutes = require("./api/posts")
const catRoutes = require("./api/categories")

// API Routes

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/post", postRoutes);
router.use("/cat", catRoutes);
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// router.use(function (req, res) {
//     res.status(200).json('hello');
// })

module.exports = router;
