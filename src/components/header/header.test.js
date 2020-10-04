import React from 'react';
import {shallow} from 'enzyme';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Header from './header';

describe('Component Header', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Header />).debug();
	});

	it('Component Header rendered correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
