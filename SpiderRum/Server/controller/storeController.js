const booksList = require("../Models/Store/booksModels");

const getAllBooks = async (req, res) => {
    try {
        const productData = await booksList.find();
        res.status(200).json(productData);
    } catch (error) {
        console.log(error.message)
    }
}

const updateBooks = async (req, res) => {
    const id = req.body._id;
    const updatedBooks = req.body;
    try {
        await booksList.findByIdAndUpdate(id, updatedBooks, {new: true});
        await res.status(200).json({"Result":"Updated successful!"});
        
    } catch (error) {
        res.status(400).send();
    }
}

const deleteBook = async (req, res) => {
    const  id = req.body.id;
   try {
      await booksList.findByIdAndDelete(id);
      // console.log(req.body);
      res.status(200).json({result: "Delete successful!" });
   } catch (error) {
      res.status(400).json(error.message);
   }
} 

const createBook = async (req, res) => {
    const newBook = req.body
    console.log(newBook)
    const newBookPost = new booksList(newBook);
    try {
       await newBookPost.save();
       res.status(200).json({result: "Create successful!" })
    } catch (error) {
       res.status(404).send(error.message)
    }
}

module.exports = {getAllBooks, updateBooks, deleteBook, createBook}; 
