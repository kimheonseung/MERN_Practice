import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  {/* react-hook : useState updates the data in the text fields */}
  const [student, setStudent] = useState({
      /* same key name with server-side model */
      regNo: 0,
      studentName: '',
      grade: '',
      section: ''
  });

  {/* send data to backend using axios */}
  const createStudent = () => {
    axios.post('http://localhost:5000/students', student).then( () => {
      window.location.reload(false);
    } );
  }
  {/* form태그 밖에 태그가 있기 때문에 에러가 나므로 빈 태그로 감싸준다 */}
  return (
    <>
    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      {/* value에 명시된 student는 CreateStudent 컴포넌트의 student 변수 */}
      <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event) => {
          setStudent({ ...student, regNo: event.target.value })
      }} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value })
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({ ...student, grade: event.target.value })
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({ ...student, section: event.target.value })
      }} />

      <Button variant="contained" color="primary" onClick={createStudent}>
        Create
      </Button>
    </form>
    </>
  );
}
