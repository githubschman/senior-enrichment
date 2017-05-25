import axios from 'axios';

// actions
const GET_STUDENTS = 'GET_STUDENTS'

// action creators
const getStudents = students => ({type: GET_STUDENTS, students})

//states:
const initialState = {students: []}

//reducer:
const studentReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case GET_STUDENTS:
            newState.students = [...action.students]
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

export default studentReducer;
