import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import AddCampus from './AddCampus.js'

class CampCont extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div>
        <h1> Our Lovely Campuses: </h1>
        <div className = "row">
          <ul>
          {this.props.campus.map((campus, index) => {
            return (<div className="col-xs-2"><li key={index}> <img src={campus.picture}/> <Link to={`/campus/${campus.id}`}> <h2> {campus.name} </h2> </Link> </li></div>)
          })}
          </ul>
        </div>
        <Link to="/add-campus">Add Campus</Link>
      </div>
    )
  }
}

/* ------------ container ------------ */

const mapState = (state) => {
  return {
    campus: state.campus.campuses
  }
}

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(CampCont);