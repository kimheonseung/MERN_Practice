import express from 'express';
import { getStudents, createStudent, deleteStudent } from '../controllers/student.js'; 
import student from '../models/student.js';

/* setup router */
const router = express.Router();

/* adding router : router.get(path, callback) */
router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);

/* export whole router */
export default router;