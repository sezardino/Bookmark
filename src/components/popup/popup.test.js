import React from 'react';
import {shallow} from 'enzyme';

import Popup from './popup';

describe('Component Popup', () => {
	const component = shallow(<Popup />);

	it('Component Popup rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
