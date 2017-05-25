import axios from 'axios';

// actions
const INITIALIZE = 'INITIALIZE'

// action creators
const init = students => ({type: INITIALIZE, students}) //just getting the list

//states:
const initialState = {}

//reducer:
const studentReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        default: 
            return newState;
    }

};

// dispatchers:


export default studentReducer;
