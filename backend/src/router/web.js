import express from "express";
import homeController from '../controllers/homeController';
import dataController from '../controllers/dataController';
import test from "../controllers/test";

let router = express.Router();

router.get('/', homeController.getHomePage);
router.get('/paragraph/:id', dataController.getParagraph);
router.get('/test', test.getRecord);

module.exports = router;