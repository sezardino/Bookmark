import React from 'react';
import {shallow} from 'enzyme';

import Form from './form';

describe('Component Form', () => {
	const component = shallow(<Form />);

	it('Component Form rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
