import mongoose from 'mongoose';

/* mongoose schema */
const studentSchema = mongoose.Schema({
    /* how student document will look like */
    /* same key name with client-side model */
    regNo: Number,
    studentName: String,
    grade: String,
    /* give default value */
    section: {
        type: String,
        default: 'A'
    },
    /* arrays */
    // subjects: [String]
});

/* create model */
const student = mongoose.model('student', studentSchema);

/* export models */
export default student;