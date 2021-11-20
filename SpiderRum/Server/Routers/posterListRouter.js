const express = require("express");
const {getPosterList, updatePosterList, deletePoster, postPoster} = require("../controller/posterController");

const posterListRouter = express.Router();

posterListRouter.get("/", getPosterList);
posterListRouter.put("/", updatePosterList);
posterListRouter.delete("/", deletePoster);
posterListRouter.post("/", postPoster);

module.exports = posterListRouter;