import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'


class AddStudent extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div>
            <form>
            
                 <legend>Add a Student</legend>
               
               
                    <div>
                        <label>Name</label>
                          <div>
                        <input name="firstname"/>
                        </div>
                    </div>
                   
                   
                   <div>
                      <label>Email</label>
                       <div>
                      <input name="email"/>
                    </div>
                    
                    
                    <div>
                      <label>Grade</label>
                          <select name="grade">
                            <option value="freshman">freshman</option>
                            <option value="sophomore">sophomore</option>
                            <option value="junior">junior</option>
                            <option value="senior">senior</option>
                          </select>
                          
                    </div>


                      <div>
                            <label>Campus</label>
                            
                                  <select name="school">
                                  {this.props.campuses.map((campus, index) => { 
                                    return <option key={index}>{campus.name}</option>
                                  })}
                          
                          </select>
                          
                          <div>
                    
                        </div>
                    </div>
                    
                    </div>
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

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(AddStudent);


//onSubmit={props.handleSubmit}

