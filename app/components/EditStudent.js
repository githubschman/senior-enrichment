import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

/* ------------ importing edit student dispatcher ------------ */
import { editStudent } from '../reducers/student-reducer.jsx'

class EditStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      major: '',
      email: '',
      grade: '',
      schoolId: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
  }

    handleMajorChange(event) {
        this.setState({major: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleGradeChange(event) {
        this.setState({grade: event.target.value});
    }

    handleCampusChange(event) {
        this.setState({schoolId: event.target.value});
    }
  
  handleSubmit(event){
    const { handleStudentUpdate } = this.props;
    event.preventDefault();
    handleStudentUpdate(this.props.studentName, this.state)
  }


  render() {
    return (
      <div className="container">
            <form onSubmit={this.handleSubmit}>
            
                <h2> Edit this student </h2>

                      <label>Major</label>
                      <input type="text" name="major" onChange={this.handleMajorChange}/>
                
                  
                      <label>Email</label>
                      <input type="text" onChange={this.handleEmailChange} />
          
                    
                  
                      <label>Grade</label>
                          <select name="grade" onChange={this.handleGradeChange}>
                            <option value="freshman">freshman</option>
                            <option value="sophomore">sophomore</option>
                            <option value="junior">junior</option>
                            <option value="senior">senior</option>
                        </select>

                    <label>Campus</label>
                    
                              <select name="campus" onChange={this.handleCampusChange}>
                              {this.props.campuses.map((campus, index) => { 
                                return <option key={index} value={campus.id}>{campus.name}</option>
                                }
                              )
                            }
                        </select>
            
                  <button type="submit">SUBMIT</button> 
                </form>
                
      </div>
    )
  }

}




const mapState = (state) => {

  return {
    // grabbing from initial data, passed to every component...
   campuses: state.campus.campuses,
   studentName: state.student.studentInfo.name
  }
}

const mapDispatch = dispatch => ({
  handleStudentUpdate: (studentName, newStudentInfo) => {
    dispatch(editStudent(studentName, newStudentInfo));
  }
});

export default connect(mapState, mapDispatch)(EditStudent);

