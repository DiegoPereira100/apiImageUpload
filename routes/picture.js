const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const PictureController = require("../controllers/pictureController");

router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.getAll);
router.delete("/:id", PictureController.delete);

module.exports = router;
