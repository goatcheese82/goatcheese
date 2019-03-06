import React, { Component } from 'react';
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
        this.setState({
            title: '',
            content: ''
        })

    }
  render() {
    return (
      <div>
        <h1>Add a Thought</h1>
        <form onSubmit={this.onSubmit}>
            <div className='form-field'>
                <label>Title: </label>
                <input type='text' name='title' value={this.state.title} onChange={this.onChange}/>
            </div>
            <div className='form-field'>
                <label>Content: </label>
                <textarea name='content' value={this.state.content} onChange={this.onChange}></textarea>
            </div>
            <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default connect(null, { newPost })(Postform);
