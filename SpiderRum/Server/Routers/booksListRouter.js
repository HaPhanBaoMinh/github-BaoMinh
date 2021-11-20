const express = require("express");
const {getAllBooks, updateBooks, deleteBook, createBook} = require("../controller/storeController");
const multer = require("multer");
const path = require("path");


const booksListRouter = express.Router();

booksListRouter.get("/", getAllBooks);
booksListRouter.put("/", updateBooks);
booksListRouter.delete("/", deleteBook);

module.exports = booksListRouter;