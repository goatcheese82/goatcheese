import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UserLogin from '../_users/UserLogin';

const link = {
  background: '#61dafb',
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
      <div className='nav-bar'>
        <NavLink to='/home' style={link} activeStyle={active}>Home</NavLink>
        <NavLink to='/thoughts' style={link} activeStyle={active}>Thoughts</NavLink>
        <NavLink to='/user' style={link} activeStyle={active}>Users</NavLink>
        <UserLogin />
      </div>
    )
  }
}
