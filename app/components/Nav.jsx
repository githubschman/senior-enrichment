import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Nav extends Component {
  render() {
    return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">MHIA of JS</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to='/students'>Students</Link></li>
          <li><Link to='/campuses'>Campuses</Link></li>
        </ul>
      </div>
    </nav>
    )
  }
}

