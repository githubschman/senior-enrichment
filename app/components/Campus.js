import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Students from './Students'

import { deleteCampus } from '../reducers/campus-reducer.jsx'



class SingleCampus extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const { handleDelete } = this.props;
    event.preventDefault();
    handleDelete(this.props.campus.campusInfo.name)
  }

  render() {
    return (
      <div>
        <h1> The {this.props.name} Campus:</h1>
        <Students students={this.props.students}/>
        <p> The average GPA on this campus is <strong>{this.props.gpa}</strong>.</p>
        
        <form onSubmit={this.handleSubmit}>
         <button type="submit">DELETE</button> 
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    gpa: state.campus.campusInfo.gpa.average,
    name: state.campus.campusInfo.name,
    students: state.campus.campusInfo.students,
    campus: state.campus
  }
}



const mapDispatch = dispatch => ({
  handleDelete: (campusName) => {
    dispatch(deleteCampus(campusName));
  }
});


export default connect(mapState, mapDispatch)(SingleCampus);

