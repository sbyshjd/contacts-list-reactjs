import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //test the <App/> has a <h1> tag with 'Contacts List'
  const root = document.createElement('div')
  ReactDOM.render(<App />, root)
  expect(root.querySelector('h1').textContent).toBe('Contacts List')
});
