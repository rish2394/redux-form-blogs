import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {createPost} from '../actions/index';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props) {
    this.props.createPost(props) //this is will return  a Promise as Action Creator payload is a Promise
        .then(() => {
          this.context.router.push('/');
        })
  }
  render() {
    const { fields: {title, categories, content}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <h3>Create a new Form</h3>
         <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
           <label>Title</label>
           <input type="text" className="form-control" {...title}/>
           <div className="text-help">
             {title.touched ? title.error : ''}
           </div>
         </div>
         <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
           <label>Categories</label>
           <input type="text" className="form-control" {...categories}/>
           <div className="text-help">
             {categories.touched ? categories.error : ''}
           </div>
         </div>
         <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
           <label>Content</label>
           <textarea className="form-control" {...content}/>
           <div className="text-help">
             {content.touched ? content.error : ''}
           </div>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
         <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}
function validate(values) {
  const err = {};
  if(!values.title) {
    err.title = 'Enter a title';
  }
  if(!values.categories) {
    err.categories = 'Enter a category';
  }
  if(!values.content) {
    err.content = 'Enter some content';
  }
  return err;
}
export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
