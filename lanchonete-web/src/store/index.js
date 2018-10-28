import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers/index';

const middleware = [thunk, logger, routerMiddleware(browserHistory)];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export function configureStore () {
  return store;
}
