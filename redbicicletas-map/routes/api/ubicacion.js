const express = require("express");
const router = express.Router();
const ubicacionController = require("../../controllers/api/ubicacionControllerApi");

router.get("/", ubicacionController.list);
router.post("/create", ubicacionController.add);

module.exports = router;