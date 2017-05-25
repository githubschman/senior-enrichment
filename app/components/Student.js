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
        <h1> {this.props.name} goes to <Link to={`/campus/${this.props.campusId}`}> {this.props.campus} </Link> and has a {this.props.gpa} GPA</h1>
      </div>
    )
  }
}


const mapState = (state) => {
  console.log(state)
  return {
    name: state.student.studentInfo.name,
    gpa: state.student.studentInfo.gpa,
    campus: state.student.studentInfo.campus,
    campusId: state.student.studentInfo.campusId
  }
}

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(SingleStudent);
