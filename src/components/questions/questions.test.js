import React from 'react';
import {shallow} from 'enzyme';

import Questions from './questions';

describe('Component Questions', () => {
	const mockData = [
		{question: 'question', answer: 'answer', id: '1'},
		{question: 'question', answer: 'answer', id: '1'},
		{question: 'question', answer: 'answer', id: '1'},
	];
	const component = shallow(<Questions data={mockData} />);

	it('Component Questions rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
