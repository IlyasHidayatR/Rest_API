import express from "express";
import {getComments, getCommentsID, saveComments, updateComments, deleteComments} from "../controllers/commentController.js";
const router = express.Router();
//get all
router.get('/comment', getComments);
//post data
router.post('/comment/create',saveComments);
//get by ID
router.get('/comment/:id', getCommentsID);
//update data
router.patch('/comment/update/:id', updateComments);
//delete data
router.delete('/comment/delete/:id', deleteComments);

export default router;