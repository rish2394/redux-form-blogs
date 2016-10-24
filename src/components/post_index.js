import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={"posts/" + post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
         <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
           {this.renderList()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts:fetchPosts },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
