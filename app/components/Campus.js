import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'


class SingleCampus extends Component {
  constructor(props){
    super(props);
  }


  render() {
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

