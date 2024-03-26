import express from "express";
// Import all user related functions from the users controller
import { getAllUsers,getUserByID, deleteUser, updateUser, addUser } from "../controllers/users.js";
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id',getUserByID)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router;