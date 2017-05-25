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
        <h1> WELCOME, STUDENTS?! </h1>
      </div>
    )
  }
}

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentsCont);