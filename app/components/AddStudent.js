import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'

import { makeNewStudent } from '../reducers/student-reducer.jsx'

class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      major: '',
      email: '',
      grade: '',
      schoolId: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
  }

  /* ------------ event handlers ------------ */

  handleNameChange(event) {
    this.setState({name: event.target.value});
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
    const { handleStudentSubmit } = this.props;

    event.preventDefault();
    handleStudentSubmit(this.state)
  }


  render() {

    return (
      <div className="container">
            <form onSubmit={this.handleSubmit}>
            
                 <h2>Add a Student</h2>
               
               
                      <label>Name</label>
                      <input type="text" name="name" onChange={this.handleNameChange}/>
                       
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


/* ------------ containers ------------ */

const mapState = (state) => {
  return {
   campuses: state.campus.campuses
  }
}

const mapDispatch = dispatch => ({
  handleStudentSubmit: (studentInfo) => {
    dispatch(makeNewStudent(studentInfo));
  }
});

export default connect(mapState, mapDispatch)(AddStudent);
