const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const categoriesRoutes = require("./categories");
const authRoutes = require("./auth");

// routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/categories", categoriesRoutes);
router.use("/auth", authRoutes);

module.exports = router;
