import React from 'react';

const PostPreview = props => {
  const post = props.post;
  

  return (
    <div className="post-preview">
      <div className="preview">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <div className="post-meta"> 
        <div className="info">
          <span className="date">
            {post.my_time}
          </span>
        </div>
        <button onClick={() => props.deletePost(props.post.id)}>Delete</button>

      </div>
    </div>
  );
}

export default PostPreview;