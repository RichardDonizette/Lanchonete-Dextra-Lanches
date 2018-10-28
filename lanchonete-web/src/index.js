import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { configureStore, history } from './store/index';

import Home from './screens/Home';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' >
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));