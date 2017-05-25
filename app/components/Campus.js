import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'

const testStudents = [
    {name: 'Jendddna', major: 'alien anthropology', grade: 'sophomore', gpa: 3.5, email:'jeonna@geomail.com'},
    {name: 'Meldddanie', major: 'astrology', grade: 'freshman', gpa: 2.9, email:'meolanie@geomail.com'},
    {name: 'Sardddah', major: 'astrology', grade: 'junior', gpa: 4.0, email:'soroh@lizards.gov'},
    {name: 'Liddz', major: 'alien anthropology', grade: 'senior', gpa: 3.1, email:'Elizabeth@blerg.edu'}
  ]
class SingleCampus extends Component {
  constructor(props){
    super(props);
  }


  render() {
      console.log(this.props.students)
    return (
      <div>
        <h1> The {this.props.name} Campus:</h1>
        <Students students={this.props.students}/>
        <p> The average GPA on this campus is <strong>{this.props.gpa}</strong>.</p>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    gpa: state.campus.campusInfo.gpa.average,
    name: state.campus.campusInfo.name,
    students: state.campus.campusInfo.students,
    campus: state.campus
  }
}



const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(SingleCampus);

