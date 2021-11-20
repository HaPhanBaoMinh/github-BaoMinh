const Poster = require("../Models/Store/posterModels");

const getPosterList = async (req, res) => {
    const posterList = await Poster.find();
    const rePosterList = posterList.reverse(); 
    try {
        res.status(200).json(rePosterList);
    } catch (error) {
        console.log(error.message)
    }
}

const updatePosterList = async (req, res) => {
    const id = req.body.id;
    const newImages = req.body; // body.bookPoster
    try {
        await Poster.findByIdAndUpdate(id, newImages, {new: true});
        await res.status(200).json({"Result":"Updated successful!"});
        
    } catch (error) {
        res.status(400).send();
    }
}

const deletePoster = async (req, res) => {
    const id = req.body.id;
    try {
        await Poster.findByIdAndDelete(id);
        res.status(200).json({"Result":"Delete successful!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const postPoster = async (req, res) => {
    const newPoster = new Poster(req.body);
    try {
        await newPoster.save();
        res.status(200).json({result: "Create successful!" })
     } catch (error) {
        res.status(404).send(error.message)
     }

}

module.exports = {getPosterList, updatePosterList, deletePoster, postPoster};