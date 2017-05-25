import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

class CampCont extends Component {
  constructor(props){
    super(props);
  }


  render() {

    console.log(this.props.campus)

    return (
      <div>
        <h1> Our Lovely Campuses: </h1>
        <div>
          <ul>
          {this.props.campus.map((campus, index) => {
            return (<li key={index}> <img src={campus.picture}/> <Link to={`/campus/${campus.id}`}> <h2> {campus.name} </h2> </Link> </li>)
          })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    campus: state.campus.campuses
  }
}

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(CampCont);