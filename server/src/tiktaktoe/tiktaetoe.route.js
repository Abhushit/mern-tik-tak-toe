var express = require('express');
var tiktaktoeController = require('./tiktaktoe.controller.js');

var router = express.Router();

router.get("/tiktaktoe", tiktaktoeController.getAllLists);
router.post("/tiktaktoe", tiktaktoeController.saveData);

module.exports = router;
