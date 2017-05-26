import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'
import EditStudent from './EditStudent'

/* ------------ importing dispatcher ------------ */
import { deleteStudent } from '../reducers/student-reducer.jsx'



class SingleStudent extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* ------------ event handler ------------ */
  handleSubmit(event){
    const { handleStudentDelete } = this.props;
    event.preventDefault();
    handleStudentDelete(this.props.name)
  }

  render() {
    return (
      <div className="container">
        <h1> {this.props.name} goes to <Link to={`/campus/${this.props.campusId}`}> {this.props.campus} </Link> and has a {this.props.gpa} GPA</h1>
         <form onSubmit={this.handleSubmit}>
         <button type="submit">DELETE</button> 
        </form>
        <EditStudent />
      </div>
      
    )
  }
}

/* ------------ container ------------ */

const mapState = (state) => {
  return {
    name: state.student.studentInfo.name,
    gpa: state.student.studentInfo.gpa,
    campus: state.student.studentInfo.campus,
    campusId: state.student.studentInfo.campusId
  }
}

const mapDispatch = dispatch => ({
  handleStudentDelete: (studentName) => {
    dispatch(deleteStudent(studentName));
  }
});


export default connect(mapState, mapDispatch)(SingleStudent);
