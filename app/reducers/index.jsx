import { combineReducers } from 'redux'
import campusReducer from './campus-reducer'
import studentReducer from './student-reducer'


/* ---- Root Reducer: --- */

export default combineReducers({campus: campusReducer, student: studentReducer})
