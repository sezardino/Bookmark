import React from 'react';
import {shallow} from 'enzyme';

import BrowsersList from './browsers-list';
describe('Component BrowsersList', () => {
	let mockData = [
		{id: 1, name: 'Some', minVersion: 11},
		{id: 2, name: 'Some', minVersion: 22},
		{id: 3, name: 'Some', minVersion: 33},
	];
	const component = shallow(<BrowsersList data={mockData} />);

	it('Component BrowsersList rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
