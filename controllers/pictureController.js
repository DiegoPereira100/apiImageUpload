const Picture = require("../models/picture");

const fs = require("fs");

exports.create = async(req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();
    
    res.json({picture, msg: "image saved"});

  } catch (error) {
    res.status(500).json({ message: "image salve error" });
  }
};

exports.getAll = async(req, res) => {
  try {

    const pictures = await Picture.find();

    res.json(pictures);
  } catch (error) {
    res.status(500).json({message: "search images error"})
  }
}

exports.delete = async(req, res) => {
  try {

    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({message: "image not found"})
    }

    fs.unlinkSync(picture.src)

    await picture.remove()

    res.json({message: "Image removed"})

  } catch (error) {
    res.status(500).json({message: "remove image error"})
  }
}