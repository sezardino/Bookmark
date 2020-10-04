import React from 'react';
import {shallow} from 'enzyme';

import ExtensionPage from './extension';
import ContactPage from './contact';
import {HomePage} from './home';
import InfoPage from './info';
import LoginPage from './login';
import NoPage from './no-page';
import Pricing from './pricing';

describe('Component ExtensionPage', () => {
	const component = shallow(<ExtensionPage />);

	it('Component ExtensionPage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component ContactPage', () => {
	const component = shallow(<ContactPage />);

	it('Component ContactPage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component HomePage', () => {
	const component = shallow(<HomePage />);

	it('Component HomePage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component InfoPage', () => {
	const component = shallow(<InfoPage />);

	it('Component InfoPage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component LoginPage', () => {
	const component = shallow(<LoginPage />);

	it('Component LoginPage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component NoPage', () => {
	const component = shallow(<NoPage />);

	it('Component NoPage rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});

describe('Component Pricing', () => {
	const component = shallow(<Pricing />);

	it('Component Pricing rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
