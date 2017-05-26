import axios from 'axios';

/* ------------ actions ------------ */
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT_INFO = 'GET_STUDENT_INFO';
const CREATE_STUDENT = 'CREATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

/* ------------ action creators ------------ */
const getStudents = students => ({type: GET_STUDENTS, students});
const getInfo = (campus, gpa, name, campusId) => ({type: GET_STUDENT_INFO, campus, gpa, name, campusId});
const createStudent = student => ({type: CREATE_STUDENT, student});
const removeStudent = name => ({type: REMOVE_STUDENT, name});
const updateStudent = updatedStudent => ({type: UPDATE_STUDENT, updatedStudent});

/* ------------ states ------------ */
const initialState = {students: [], studentInfo: {schoolId: 1, gpa: 0, name:'', campusId: 0}}

/* ------------ the actual reducer ------------ */
const studentReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case GET_STUDENTS:
            newState.students = [...action.students]
            break;
         case GET_STUDENT_INFO:
            newState.studentInfo.campus = action.campus.name
            newState.studentInfo.gpa = action.gpa.gpa,
            newState.studentInfo.name = action.name.name
            newState.studentInfo.campusId = action.campusId.campusId
            break;
        case CREATE_STUDENT:
            newstate.students = [...action.student]
            break;
        case REMOVE_STUDENT:
            newState.students = newState.students.filter(student => student.name !== action.name)    
            break;
        case UPDATE_STUDENT:
            students.map(student => (student.name === action.updatedStudent.name ? action.updatedStudent : student))
            break;
        default: 
            return newState;
    }
    return newState;

};

/* ------------ dispatchers ------------ */
export const fetchStudents = () => dispatch => {
    axios.get('/api/students/all-students')
        .then(res => dispatch(getStudents(res.data)))
        .catch(err => console.error);;
};


export const fetchSingleStudentInfo = (studentId) => dispatch => {
     Promise
      .all(
            [axios.get(`/api/students/student-school/${studentId}`), 
             axios.get(`/api/students/student/${studentId}/gpa`),
             axios.get(`/api/students/student/${studentId}/name`),
             axios.get(`/api/students/student/${studentId}/campusId`)])
                .then(results => results.map(r => r.data))
                .then(results => {
                    return dispatch(getInfo(...results))
    })
}

export const makeNewStudent = (studentInfo) => dispatch => {
    axios.post('/api/students/student/addnew/', studentInfo)
        .then(results => dispatch(createStudent(results.data)))
        .catch(err => console.error);
}   

export const deleteStudent = (studentName) => dispatch => {

    //dispatch remove student
    dispatch(removeStudent(studentName))

    //then do axios delete
    axios.delete(`/api/students/delete/${studentName}`)
        .then(results => console.log(results))
        .catch(err => console.error);
    //i was trying to pass studentname to remove student action throug the axios call originally, but you can't do that     
}

export const editStudent = (name, studentInfo) => dispatch => {
    //ugh ok i realized that two students could have the same name too late :( i don't know why i didn't do id, i did name for like all of them, what a BLUNDER.
    axios.put(`/api/students/${name}`, studentInfo)
        .then(updatedStudent => dispatch(updateStudent(updatedStudent.data)))
        .catch(err => console.error);

}


export default studentReducer;
