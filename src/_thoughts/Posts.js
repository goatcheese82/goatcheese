import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { getFilteredPosts } from "../actions/postActions";
import { deletePost } from "../actions/postActions";
import PostPreview from "./PostPreview";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () =>
    this.props.posts.map((post, id) => (
      <PostPreview
        post={post}
        key={post.id}
        deletePost={this.props.deletePost}
      />
    ));

  render() {
    if (!this.props.filter) {
      return (
        <div>
          <button onClick={this.props.getFilteredPosts}>Sort</button>
          {this.renderPosts()}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  filter: state.posts.filter
});

export default connect(
  mapStateToProps,
  { fetchPosts, getFilteredPosts, deletePost }
)(Posts);

//getFilteredPosts(state.posts.items, state.filter)
