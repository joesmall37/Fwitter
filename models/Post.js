const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // future development we'll add photo and video for posts
    // video: {
    //
    //   type: String,
    //   required: false,
    // },
    // photo: {
    //   type: String,
    //   required: false,
    // },
    username: {
      type: String,
      required: true,
    },
    // categories for posts
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
