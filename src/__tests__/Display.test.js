/* eslint no-undef: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display result="3" expresion="3" />, div);
});