import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React, { Component } from 'react';
import { fetchCampuses, fetchCampusInfo } from '../reducers/campus-reducer.jsx'
import { fetchStudents, fetchSingleStudentInfo } from '../reducers/student-reducer.jsx'


/* ---- all of these components: --- */
import AppContainer from './AppContainer'
import Nav from './Nav'
import CampusesCont from './Campuses'
import Students from './Students'
import SingleCampus from './Campus'
import SingleStudent from './Student'
import AddStudent from './AddStudent.js' //idk why i had to add .js??
import AddCampus from './AddCampus.js'

///////////////


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



////////////



//remember ${message}? mapProps = {message: log in}
const mapStateToProps = null;
  
//Get all campuses, all students
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

//fetchSingleStudentInfo

export default connect(mapStateToProps, mapDispatch)(Routes);

//const Routes = ({ fetchInitialData, onStoryEnter }) 
//don't forget to add any onEnter  functions into the parameters of Route...