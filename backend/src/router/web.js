import express from "express";
import homeController from '../controllers/homeController';
import { getParagraph } from "../controllers/paragraphController";
import { getUser, login } from "../controllers/userController";
import userController from '../controllers/userController_new';
import recordController from '../controllers/recordController';
let router = express.Router();

// router.use('/auth', loginVerify)
router.get('/', homeController.getHomePage);
router.get('/getparagraph/:id', getParagraph)
router.get('/user/:id', getUser)
// router.post('/login', login)
router.post('/api/login', userController.handleLogin);
router.get('/api/get-all-users', userController.handleGetAllUsers);
router.post('/api/create-new-user', userController.handleCreateNewUser);
router.get('/api/get-all-records', recordController.handleGetAllRecords);
module.exports = router;