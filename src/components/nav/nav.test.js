import React from 'react';
import {shallow} from 'enzyme';

import Nav from './nav';

describe('Component Nav', () => {
	const component = shallow(<Nav />);

	it('Component Nav rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
