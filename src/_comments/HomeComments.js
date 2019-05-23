import React, { Component } from 'react';
import CommentForm from './CommentForm';

class HomeComments extends Component {
    constructor(props) {
        super(props);
        {
            this.state = {
                comments: []
            }
        }
    }

    handleForm = comment => {
        this.setState({
            ...this.state,
            comments: [...this.state.comments, comment]
        })

    }
    
    renderComments = () =>
        this.state.comments.map((comment) => (
            <div className='comment'>
                {comment.title}
                <p>{comment.content}</p>
            </div>
        ))


    render() {
        return (
            <div>
                {this.renderComments()}
                <CommentForm handleForm={this.handleForm}/>
            </div>
        )
    }
}


export  default HomeComments