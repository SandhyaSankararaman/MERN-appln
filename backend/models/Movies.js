const mongoose = require("mongoose");
const MovieSchema = require("mongoose");
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: String,
      required: true,
    },
  ],
  releaseDate: {
    type: Date,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "admin",
    required: true,
  },
});

const movie = mongoose.model("Movies", MovieSchema);
module.exports = movie;
