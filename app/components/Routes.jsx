import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React, { Component } from 'react';
import { fetchCampuses, fetchCampusInfo } from '../reducers/campus-reducer.jsx'
import { fetchStudents, fetchSingleStudentInfo } from '../reducers/student-reducer.jsx'


/* ---- Components: --- */
import AppContainer from './AppContainer'
import Nav from './Nav'
import CampusesCont from './Campuses'
import Students from './Students'
import SingleCampus from './Campus'
import SingleStudent from './Student'
import AddStudent from './AddStudent.js' // I added .js because I accidentally touched it as a non-js file ??
import AddCampus from './AddCampus.js'




/* ---- Routes: --- */

const Routes = ({ fetchInitialData, fetchStudentsData, fetchSingleCampusData, fetchSingleStudentData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} onEnter={fetchInitialData}>
      <IndexRoute component={CampusesCont} />
          <Route path='/campuses' component={CampusesCont}/>
          <Route path='/campus/:id' component={SingleCampus} onEnter={fetchSingleCampusData}/>
          <Route path='/students' component={Students} onEnter={fetchStudentsData}/>
           <Route path='/add-student' component={AddStudent}/>
           <Route path='/add-campus' component={AddCampus}/>
          <Route path='/students/:id' component={SingleStudent} onEnter={fetchSingleStudentData}/>
      <Route path="*" component={CampusesCont} />
    </Route>
  </Router>
);



/* ---- Container: --- */

const mapStateToProps = null;
  
const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
  },
  fetchStudentsData: () => {
    dispatch(fetchStudents());
  },
  fetchSingleCampusData: (nextState) => {
    const campusId = nextState.params.id;
    dispatch(fetchCampusInfo(campusId));
  },
  fetchSingleStudentData: (nextState) =>{
    const studentId = nextState.params.id;
    dispatch(fetchSingleStudentInfo(studentId));
  }
});



export default connect(mapStateToProps, mapDispatch)(Routes);
