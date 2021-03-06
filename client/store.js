import { createStore , compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

// import browserHistory
import { browserHistory } from 'react-router';

// import reducers
import rootReducer from './reducers/index';

// import default data
import comments from './data/comments.js';
import posts from './data/posts.js';

// create DefaultState
const defaultState = {
  posts,
  comments
}

// creating the redux store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
