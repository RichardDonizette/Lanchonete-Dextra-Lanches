import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Home from './screens/Home';
import CreateSandwich from './screens/CreateSandwich';
import SelectSandwich from './screens/SelectSandwich';
import Sandwich from './components/Sandwich';
import IngredientList from './components/IngredientList';
import Header from './components/Header';
import Cart from './components/Cart';
import menu from './reducers/index'

//Teste de render das telas

it('renders Home without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<Home />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CreateSandwich without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<CreateSandwich />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SelectSandwich without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<SelectSandwich />), div);
  ReactDOM.unmountComponentAtNode(div);
});

//Teste de render dos Componentes

it('renders component Sandwich without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<Sandwich />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component IngredientList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<IngredientList />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<Header />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component Cart without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<Cart />), div);
  ReactDOM.unmountComponentAtNode(div);
});