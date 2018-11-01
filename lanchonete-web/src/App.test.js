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
import { calculePriceBySandwich } from './util/cartCalculation';

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

it('Calculate the price of the sandwich', () => {
  const sandwich ={
    "ingredients": ["Bacon", "Hambúrguer de carne", "Queijo"]
  }

  const ingredientsPrice = [
    {
      "Name": "Bacon",
      "Price": 2.0
    },
    {
      "Name": "Alface",
      "Price": 0.4
    },
    {
      "Name": "Hambúrguer de carne",
      "Price": 3.0
    },
    {
      "Name": "Ovo",
      "Price": 0.8
    },
    {
      "Name": "Queijo",
      "Price": 1.5
    }
  ];
  
  expect(calculePriceBySandwich(sandwich, ingredientsPrice)).toBe(6.5)
});

//Teste dos valores do lanche

it("Calculate the price of promotion 'A lot of meat'", () => {
  const sandwich ={
    "ingredients": ["Bacon", "Hambúrguer de carne", "Queijo", "Hambúrguer de carne", "Hambúrguer de carne",]
  }

  const ingredientsPrice = [
    {
      "Name": "Bacon",
      "Price": 2.0
    },
    {
      "Name": "Alface",
      "Price": 0.4
    },
    {
      "Name": "Hambúrguer de carne",
      "Price": 3.0
    },
    {
      "Name": "Ovo",
      "Price": 0.8
    },
    {
      "Name": "Queijo",
      "Price": 1.5
    }
  ];
  
  expect(calculePriceBySandwich(sandwich, ingredientsPrice)).toBe(9.5)
});

it("Calculate the price of promotion 'A lot of cheese'", () => {
  const sandwich ={
    "ingredients": ["Bacon", "Hambúrguer de carne", "Queijo", "Queijo", "Queijo"]
  }

  const ingredientsPrice = [
    {
      "Name": "Bacon",
      "Price": 2.0
    },
    {
      "Name": "Alface",
      "Price": 0.4
    },
    {
      "Name": "Hambúrguer de carne",
      "Price": 3.0
    },
    {
      "Name": "Ovo",
      "Price": 0.8
    },
    {
      "Name": "Queijo",
      "Price": 1.5
    }
  ];
  
  expect(calculePriceBySandwich(sandwich, ingredientsPrice)).toBe(8)
});

it("Calculate the price of promotion 'Light sandwich'", () => {
  const sandwich ={
    "ingredients": ["Hambúrguer de carne", "Queijo", "Alface"]
  }

  const ingredientsPrice = [
    {
      "Name": "Bacon",
      "Price": 2.0
    },
    {
      "Name": "Alface",
      "Price": 0.4
    },
    {
      "Name": "Hambúrguer de carne",
      "Price": 3.0
    },
    {
      "Name": "Ovo",
      "Price": 0.8
    },
    {
      "Name": "Queijo",
      "Price": 1.5
    }
  ];
  
  expect(calculePriceBySandwich(sandwich, ingredientsPrice)).toBe(4.41)
});