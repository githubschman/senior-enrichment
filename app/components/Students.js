import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

class StudentsCont extends Component {
  constructor(props){
    super(props);
  }
  

  render() {
      return (
      <div>
        <h2> Our Unique Students: </h2>
        <div>
          <table>
           <thead>
            <tr>
              <th>Name</th>
              <th>Major</th>
              <th>Grade</th>
              <th>GPA</th>
              <th>Contact</th>
            </tr>
             </thead>
            <tbody>
            {
              this.props.students.map(student => (
            <tr key={student.id}>
              <td><Link to={`/students/${student.id}`}> {student.name} </Link></td>
              <td>{student.major}</td>
              <td>{student.grade}</td>
              <td>{student.gpa}</td>
              <td><Link to={`mailto:${student.email}?Subject=Hi%20alien%20student`} target="_top">Send Mail</Link></td>
            </tr>
          ))
            }
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const mapState = (state, ownprops) => {
  return {
    //CAN WHOEVER IS READING PLEASE APPRECIATE THIS, IT WAS SO HARD TO COME UP WITH
    students: ownprops.students || state.student.students
  }
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentsCont);
