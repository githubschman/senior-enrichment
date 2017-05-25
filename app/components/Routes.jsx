import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React, { Component } from 'react';
import { fetchCampuses } from '../reducers/campus-reducer.jsx'


/* ---- all of these components: --- */
import AppContainer from './AppContainer'
import Nav from './Nav'
import CampusesCont from './Campuses'
import Students from './Students'

///////////////


const Routes = ({ fetchInitialData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} onEnter={fetchInitialData}>
      <IndexRoute component={CampusesCont} />
          <Route path='/campuses' component={CampusesCont}/>
          <Route path='/students' component={Students}/>
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
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);

//const Routes = ({ fetchInitialData, onStoryEnter }) 
//don't forget to add any onEnter  functions into the parameters of Route...