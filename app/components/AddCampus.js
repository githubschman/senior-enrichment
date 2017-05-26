import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

/* ------------ Importing dispatcher ------------ */
import { makeNewCampus } from '../reducers/campus-reducer.jsx'


class AddCampus extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  
/* ------------ event handler ------------ */
  handleSubmit(event){
    const { handleCampusSubmit } = this.props;
    event.preventDefault();
    handleCampusSubmit(this.state)
  };


  render() {

    return (
      <div className="container">
            <form onSubmit={this.handleSubmit}>
            
                 <legend>Add a Campus</legend>
               
               
                      <label>Name</label>
                      <input type="text" name="name" onChange={this.handleNameChange}/>

                  <button type="submit">SUBMIT</button> 
                </form>
                
      </div>
    )
  }

}

/* ------------ Container ------------ */

const mapDispatch = dispatch => ({
  handleCampusSubmit: (campusName) => {
    dispatch(makeNewCampus(campusName));
  }
});


export default connect(null, mapDispatch)(AddCampus);





