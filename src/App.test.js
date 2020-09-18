import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders the correct content', () => {
  //test the <App/> has a <h1> tag with 'Contacts List'
  const { getByText } = render(<App/>)

  getByText('Contacts List')
});
