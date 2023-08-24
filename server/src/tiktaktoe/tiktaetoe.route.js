import express from 'express';
import tiktaktoeController from './tiktaktoe.controller.js';

var router = express.Router();

router.get("/tiktaktoe", tiktaktoeController.getAllLists);
router.post("/tiktaktoe", tiktaktoeController.saveData);

export default router;