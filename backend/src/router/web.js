import express from "express";
import homeController from '../controllers/homeController';

let router = express.Router();

router.get('/', homeController.getHomePage);

module.exports = router;