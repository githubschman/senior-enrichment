import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'

class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      major: '',
      email: '',
      grade: '',
      campus: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
  }

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
    this.setState({campus: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
    console.log('hi?!')
  }


  render() {

    return (
      <div>
            <form onSubmit={this.handleSubmit}>
            
                 <legend>Add a Student</legend>
               
               
                      <label>Name</label>
                      <input type="text" name="name" onChange={this.handleNameChange}/>
                       
                      <label>Major</label>
                      <input type="text" name="major" onChange={this.handleMajorChange}/>
                
                  
                      <label>Email</label>
                      <input type="text" onChange={this.handleEmailChange} />
          
                    
                  
                      <label>Grade</label>
                          <select name="grade" onChange={this.handleGradeChange}>
                            <option value={this.state.grade}>freshman</option>
                            <option value={this.state.grade}>sophomore</option>
                            <option value={this.state.grade}>junior</option>
                            <option value={this.state.grade}>senior</option>
                        </select>
            

                        <label>Campus</label>
                    
                          <select name="campus" onChange={this.handleCampuschange}>
                          {this.props.campuses.map((campus, index) => { 
                            return <option key={index}>{campus.name}</option>
                          })}
                      
                      </select>
                        
            
                  <button type="submit">SUBMIT</button> 
                </form>
                
      </div>
    )
  }

}




const mapState = (state) => {
  return {
    // grabbing from initial data, passed to everyone
   campuses: state.campus.campuses
  }
}

const mapDispatch = dispatch => ({
  handleStudentSubmit: () => {
    dispatch(makeNewStudent());
  }
});

export default connect(mapState, null)(AddStudent);





// class AddStudent extends Component {
//   constructor(props){
//     super(props);
//   }


//   render() {

//     return (
//       <div>add a student page</div>
      
//       )


//   }
// }

// export default connect(null, null)(AddStudent);