import React, { Component } from 'react'
import HomeComments from '../_comments/HomeComments'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <h1>Welcome!</h1>
        <HomeComments />
        </div>
      </div>
    )
  }
}

export default Home
