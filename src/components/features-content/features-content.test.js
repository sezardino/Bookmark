import React from 'react';
import {shallow} from 'enzyme';

import FeaturesContent from './features-content';

describe('Component FeaturesContent', () => {
	const mockData = [
		{id: 1, text: 'Text', img: './src/img.jpg', title: 'Title'},
		{id: 2, text: 'Text', img: './src/img.jpg', title: 'Title'},
		{id: 3, text: 'Text', img: './src/img.jpg', title: 'Title'},
	];
	const component = shallow(<FeaturesContent data={mockData} />);

	it('Component FeaturesContent rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
