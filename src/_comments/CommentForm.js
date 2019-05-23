import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        title: "",
        content: ""
      };
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const comment = {
      title: this.state.title,
      content: this.state.content
    };

    this.props.handleForm(comment);

    this.setState({
      title: "",
      content: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            autoFocus='true'
            value={this.state.title}
            onChange={this.onChange}
          />
          <label>Comment:</label>
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
