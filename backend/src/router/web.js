import express from "express";
import homeController from '../controllers/homeController';
import paragraphController from "../controllers/paragraphController";
import { getUser, login } from "../controllers/userController";
import userController from '../controllers/userController_new';
import recordController from '../controllers/recordController';
let router = express.Router();

// router.use('/auth', loginVerify)
router.get('/', homeController.getHomePage);
router.get('/api/get-paragraphs', paragraphController.getParagraphs);//
router.post('/api/get-test-paragraphs', paragraphController.getTestParagraphs);//

router.get('/api/get-paragraphs', paragraphController.getParagraphs);
router.post('/api/get-test-paragraphs', paragraphController.getTestParagraphs);

router.post('/api/login', userController.handleLogin);//
router.get('/api/get-all-users', userController.handleGetAllUsers);//
router.post('/api/create-new-user', userController.handleCreateNewUser);//
router.get('/api/get-all-records', recordController.handleGetAllRecords);//
router.post('/api/update-records', recordController.handleUpdateRecords);
router.put('/api/edit-user', userController.handleEditUser);//
router.delete('/api/delete-user', userController.handleDeleteUser);//


router.post('/api/create-new-paragraph', paragraphController.handleCreateNewParagraph);//
router.get('/api/get-all-paragraphs', paragraphController.handleGetAllParagraphs);//
router.put('/api/edit-paragraph', paragraphController.handleEditParagraph);//
router.delete('/api/delete-paragraph', paragraphController.handleDeleteParagraph);//
module.exports = router;
