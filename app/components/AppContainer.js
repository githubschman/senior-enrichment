import React from 'react';
import Nav from './Nav.jsx';

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <Nav />
    { children }
  </div>
);

export default Root;
