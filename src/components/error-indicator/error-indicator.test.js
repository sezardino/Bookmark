import React from 'react';
import {shallow} from 'enzyme';

import ErrorIndicator from './error-indicator';

describe('Component ErrorIndicator', () => {
	const component = shallow(<ErrorIndicator />);

	it('Component ErrorIndicator rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
