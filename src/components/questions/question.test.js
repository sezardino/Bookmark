import React from 'react';
import {shallow} from 'enzyme';

import Question from './question';

describe('Component Question', () => {
	const mockData = {question: 'question', answer: 'answer', id: '1'};
	const component = shallow(<Question data={mockData} />);

	it('Component Question rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
