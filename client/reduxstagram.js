// let's go!
import React from 'react';
import Main from './components/main.js';
import PhotoGrid from './components/photogrid.js';
import Single from './components/single.js';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// initilize router jsx file
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

// rendering the router in the root element
render(router, document.getElementById('root'));

// OR
// ReactDom.render(router, document.getElementById('root'));
