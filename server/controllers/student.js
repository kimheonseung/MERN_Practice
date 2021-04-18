/* when we have a lot of routes, it's gonna get messy. */
/* write routes functions */
/* export functions and import it to routes */
import StudentData from '../models/student.js';


export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

/* add user */
export const createStudent = async (req, res) => {
    console.log('createStudent');
    /* all params from request body */
    const student = req.body;
    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

/* delete user */
export const deleteStudent = async (req, res) => {

    const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted !');
    } catch (error) {
        console.log(error);
    }
}