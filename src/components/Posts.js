import React, { Component } from 'react'

export default class Posts extends Component {
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}
