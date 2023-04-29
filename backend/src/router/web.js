import express from "express";
import homeController from '../controllers/homeController';
import { getParagraph } from "../controllers/paragraphController";
import { getUser, login } from "../controllers/userController";

let router = express.Router();

// router.use('/auth', loginVerify)
router.get('/', homeController.getHomePage);
router.get('/getparagraph/:id', getParagraph)
router.get('/user/:id', getUser)
router.post('/login', login)


module.exports = router;