import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

class SingleCampus extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <h1> Single Campus Page! </h1>
        <p> The average GPA on this campus is <strong>{this.props.gpa}</strong>.</p>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    gpa: state.campus.campusInfo.gpa.average,
    campus: state.campus
  }
}



const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(SingleCampus);