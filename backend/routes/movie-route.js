const express = require("express");
const movieRouter = express.Router;

movieRouter.get("/", getAllMovie);
movieRouter.get("/add", addMovie);
movieRouter.get("/:id", getMoviebyId);

module.exports = movieRouter;
