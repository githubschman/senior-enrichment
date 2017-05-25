import axios from 'axios';

// actions
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT_INFO = 'GET_STUDENT_INFO'
const CREATE_STUDENT = 'CREATE_STUDENT'

// action creators
const getStudents = students => ({type: GET_STUDENTS, students})
const getInfo = (campus, gpa, name, campusId) => ({type: GET_STUDENT_INFO, campus, gpa, name, campusId})
const createStudent = student => ({type: CREATE_STUDENT, student})

//states:
const initialState = {students: [], studentInfo: {campus: '', gpa: 0, name:'', campusId: 0}}
//reducer:
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
        default: 
            return newState;
    }
    return newState;

};

// dispatchers:
export const fetchStudents = () => dispatch => {
    axios.get('/api/students/all-students')
    .then(res => dispatch(getStudents(res.data)));
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
    .then(results => dispatch(createStudent(results.data)));
}

export default studentReducer;
