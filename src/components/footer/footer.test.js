import React from 'react';
import {shallow} from 'enzyme';

import Footer from './footer';

describe('Component Footer', () => {
	const component = shallow(<Footer />);

	it('Component Footer rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
