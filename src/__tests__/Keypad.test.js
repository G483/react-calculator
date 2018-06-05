/* eslint no-undef: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from '../components/Keypad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Keypad symbol="x" action={() => {console.log('trololol')}} />, div);
});