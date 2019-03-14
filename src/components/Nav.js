import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  background: 'blue',
  color: 'white',
  padding: '15px'
}

const active = {
  background: 'white',
  color: 'purple'
}

export default class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to='' style={link} activeStyle={active}>Home</NavLink>
        <NavLink to='/thoughts' style={link} activeStyle={active}>Thoughts</NavLink>
        <NavLink to='/register' style={link} activeStyle={active}>Register</NavLink>
      </div>
    )
  }
}
