import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { newPost } from '../actions/postActions';
import { connect } from 'react-redux';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const post= {
            title: this.state.title,
            content: this.state.content
        };
        this.props.newPost(post)

    }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label>
                <input type='text' name='title' value={this.state.title} onChange={this.onChange}/>
            </div>
            <div>
                <label>Content: </label>
                <input type='textarea' name='content' value={this.state.content} onChange={this.onChange}></input>
            </div>
            <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default connect(null, { newPost })(Postform);
