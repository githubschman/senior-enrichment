import axios from 'axios';

// actions
const INITIALIZE = 'INITIALIZE'

// action creators
const init = campuses => ({type: INITIALIZE, campuses})

//states:
const initialState = {campuses: []}

//reducer:
const campusReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case INITIALIZE:
            newState.campuses = [...action.campuses]
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

export default campusReducer;
