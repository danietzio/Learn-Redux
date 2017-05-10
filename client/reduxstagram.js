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

// import Provider for setting store to our application in react
import { Provider } from 'react-redux';
import store, { history } from './store.js';

// initilize router jsx file
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

// rendering the router in the root element
render(router, document.getElementById('root'));

// OR
// ReactDom.render(router, document.getElementById('root'));
