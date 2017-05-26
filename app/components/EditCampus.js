import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

/* ------------ importing dispatcher ------------ */
import { editCampusInfo } from '../reducers/campus-reducer.jsx'

class EditCampus extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

/* ------------ event handlers ------------ */
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleSubmit(event){
    const { handleCampusUpdate } = this.props;
    event.preventDefault();
    handleCampusUpdate(this.props.campusName, this.state)
  }


  render() {
        return (
        <div className="container">
                <form onSubmit={this.handleSubmit}>
                
                    <h2> Edit this Campus </h2>

                        <label>Change Campus Name</label>
                        <input type="text" name="campusName" onChange={this.handleNameChange}/>
                    
                    <button type="submit">SUBMIT</button> 
                    
                    </form>
                    
        </div>
        )
  }

};


/* ------------ container ------------ */

const mapState = (state) => {

  return {
    // grabbing from initial data, passed to every component...
   campusName: state.campus.campusInfo.name
  }
};

const mapDispatch = dispatch => ({
  handleCampusUpdate: (campusName, newName) => {
    dispatch(editCampusInfo(campusName, newName));
  }
});

export default connect(mapState, mapDispatch)(EditCampus);

