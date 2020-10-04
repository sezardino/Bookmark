import React from 'react';
import {shallow} from 'enzyme';

import App from './app';
describe('Component App', () => {
	const app = shallow(<App />);

	it('Component App rendered correctly', () => {
		expect(app.debug()).toMatchSnapshot();
	});
});
