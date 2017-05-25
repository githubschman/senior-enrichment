import axios from 'axios';

// actions
const INITIALIZE = 'INITIALIZE'
const GET_INFO = 'GET_INFO'

// action creators
const init = campuses => ({type: INITIALIZE, campuses})
const getInfo = (gpa, name, students) => ({type: GET_INFO, gpa, name, students})

//states:
const initialState = {campuses: [], campusInfo: {gpa: 0, name: '', students: []}}

//reducer:
const campusReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case INITIALIZE:
            newState.campuses = [...action.campuses]
            break;
        case GET_INFO:
            newState.campusInfo.gpa = action.gpa,
            newState.campusInfo.name = action.name,
            newState.campusInfo.students = [...action.students]
            break;    
        default: 
            return newState;
    }
    return newState;

};

// dispatchers:
export const fetchCampuses = () => dispatch => {
    axios.get('/api/campus/campuses')
    .then(res => dispatch(init(res.data)));
};

export const fetchCampusInfo = (schoolId) => dispatch => {
     Promise
      .all(
            [axios.get(`/api/campus/${schoolId}/info`), 
             axios.get(`/api/campus/${schoolId}/name`),
             axios.get(`/api/campus/${schoolId}/students`)])
    .then(results => results.map(r => r.data))
    .then(results => dispatch(getInfo(...results)))
}



export default campusReducer;