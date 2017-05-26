import axios from 'axios';

/* ------------ actions ------------ */
const INITIALIZE = 'INITIALIZE';
const GET_INFO = 'GET_INFO';
const MAKE_CAMPUS = 'MAKE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

/* ------------ action creators ------------ */
const init = campuses => ({type: INITIALIZE, campuses})
const getInfo = (gpa, name, students) => ({type: GET_INFO, gpa, name, students})
const makeCampus = campus => ({type: MAKE_CAMPUS, campus})
const removeCampus = name => ({type: REMOVE_CAMPUS, name})
const updateCampus = updatedCampus => ({type: UPDATE_CAMPUS, updateCampus})

/* ------------ state ------------ */
const initialState = {campuses: [], campusInfo: {gpa: 0, name: '', students: []}}

/* ------------ actual reducer ------------ */
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
        case MAKE_CAMPUS:
            newState.campuses = [...action.campus]  
            break; 
       case REMOVE_CAMPUS:
            newState.campuses = newState.campuses.filter(campus => campus.name !== action.name)
            break; 
        case UPDATE_CAMPUS:
            newState.campuses = (campus => (campus.name === action.updatedCampus.name ? action.updatedCampus : campus))
            break;
        default: 
            return newState;
    }
    return newState;

};

/* ------------ dispatchers ------------ */
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
};

export const makeNewCampus = (campusName) => dispatch => {
    axios.post('/api/campus/newCampus', campusName)
    .then(results => dispatch(makeCampus(results.data)))
};

export const deleteCampus = (campusName) => dispatch => {
    //dispatch remove campus
    dispatch(removeCampus(campusName))

    //then do axios delete
    axios.delete(`/api/campus/delete/${campusName}`)
    .then(results => console.log(results))
}
export const editCampusInfo = (campusName, newCampusInfo) => dispatch => {
    axios.put(`/api/campus/${campusName}`, newCampusInfo)
        .then(updatedCampus => dispatch(updateCampus(updatedCampus)))
        .catch(err => console.error)
}

export default campusReducer;
