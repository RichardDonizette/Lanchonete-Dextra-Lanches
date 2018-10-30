import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Home from './screens/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<Home />), div);
  ReactDOM.unmountComponentAtNode(div);
});
