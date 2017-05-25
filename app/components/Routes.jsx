import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React, { Component } from 'react';
import { fetchCampuses, fetchGPA } from '../reducers/campus-reducer.jsx'
import { fetchStudents } from '../reducers/student-reducer.jsx'


/* ---- all of these components: --- */
import AppContainer from './AppContainer'
import Nav from './Nav'
import CampusesCont from './Campuses'
import Students from './Students'
import SingleCampus from './Campus'

///////////////


const Routes = ({ fetchInitialData, fetchStudentsData, fetchGPAData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} onEnter={fetchInitialData}>
      <IndexRoute component={CampusesCont} />
          <Route path='/campuses' component={CampusesCont}/>
          <Route path='/campus/:id' component={SingleCampus} onEnter={fetchGPAData}/>
          <Route path='/students' component={Students} onEnter={fetchStudentsData}/>
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
  fetchGPAData: (nextState) => {
    const campusId = nextState.params.id;
    dispatch(fetchGPA(campusId));
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);

//const Routes = ({ fetchInitialData, onStoryEnter }) 
//don't forget to add any onEnter  functions into the parameters of Route...