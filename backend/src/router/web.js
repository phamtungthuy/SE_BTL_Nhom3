import express from "express";
import homeController from '../controllers/homeController';
import { getParagraph } from "../controllers/paragraphController";

let router = express.Router();

router.get('/', homeController.getHomePage);
router.get('/getparagraph/:id', getParagraph)

module.exports = router;