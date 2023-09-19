const express = require("express");
const fluigsController = require("../controllers/fluigController");
const fluigMiddleware = require("../middlewares/fluigMiddleware");

const router = express.Router();

router.get("/allfluigs", fluigsController.getAll);
router.get("/getfluig", fluigMiddleware.validateGetOrder, fluigsController.getOrder);
router.post("/createfluig", fluigMiddleware.validateCreateFluig, fluigsController.createXML);

module.exports = router;