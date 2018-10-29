import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import './index.css';

import { configureStore, history } from './store/index';

import Home from './screens/Home';
import SelectSandwich from './screens/SelectSandwich';
import CreateSandwich from './screens/CreateSandwich';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' >
        <IndexRoute component={Home} />
        <Route path='selectSandwish' component={SelectSandwich} />
        <Route path='createSandwish' component={CreateSandwich} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));