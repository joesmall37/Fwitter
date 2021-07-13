const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
