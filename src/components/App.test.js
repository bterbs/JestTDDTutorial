/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

 // first test - a unit test //
 it('renders correctly', () => {
   expect(app).toMatchSnapshot();
 });
