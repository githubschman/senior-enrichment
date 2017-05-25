import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'

const testStudents = [
    {name: 'Jenna', major: 'alien anthropology', grade: 'sophomore', gpa: 3.5, email:'jeonna@geomail.com'},
    {name: 'Melanie', major: 'astrology', grade: 'freshman', gpa: 2.9, email:'meolanie@geomail.com'},
    {name: 'Sarah', major: 'astrology', grade: 'junior', gpa: 4.0, email:'soroh@lizards.gov'},
    {name: 'Liz', major: 'alien anthropology', grade: 'senior', gpa: 3.1, email:'Elizabeth@blerg.edu'}
  ]
class SingleCampus extends Component {
  constructor(props){
    super(props);
  }


  render() {
      console.log(testStudents)
    return (
      <div>
        <h1> Single Campus Page! </h1>
        <Students students={testStudents}/>
        <p> The average GPA on this campus is <strong>{this.props.gpa}</strong>.</p>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    gpa: state.campus.campusInfo.gpa.average,
    campus: state.campus
  }
}



const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(SingleCampus);

