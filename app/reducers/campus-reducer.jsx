import axios from 'axios';

// actions
const INITIALIZE = 'INITIALIZE'
const GET_GPA = 'GET_GPA'

// action creators
const init = campuses => ({type: INITIALIZE, campuses})
const getGPA = gpa => ({type: GET_GPA, gpa})

//states:
const initialState = {campuses: [], campusInfo: {gpa: 0, name: '', students: []}}

//reducer:
const campusReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case INITIALIZE:
            newState.campuses = [...action.campuses]
            break;
        case GET_GPA:
            newState.campusInfo.gpa = action.gpa
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

export const fetchGPA = (schoolId) => dispatch => {
    axios.get(`/api/campus/${schoolId}/info`)
    .then(res => dispatch(getGPA(res.data)))
}


export default campusReducer;
