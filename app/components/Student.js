import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'


class SingleStudent extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div>
        <h1> {this.props.name} goes to {this.props.campus} and has a {this.props.gpa} GPA</h1>
      </div>
    )
  }
}


const mapState = (state) => {
  
  return {
    name: state.student.studentInfo.name,
    gpa: state.student.studentInfo.gpa,
    campus: state.student.studentInfo.campus
  }
}

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(SingleStudent);
