import App from './components/app';
import {Route, IndexRoute} from 'react-router';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import React from 'react';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
)
