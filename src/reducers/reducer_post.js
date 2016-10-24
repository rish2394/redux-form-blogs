import {FETCH_POSTS, FETCH_POST} from '../actions/index';
const intialState = {
      all: [],
      post: null
}
export default function(state=intialState, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log("action.payload.data = ", action.payload.data);
      return {...state, post: action.payload.data}
    case FETCH_POSTS:
      return {...state, all: action.payload.data}
    default:
      return state;
  }
}
