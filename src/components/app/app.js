import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useBookmarkContext} from '../../hooks';
import ROUTES from '../../routes';

import Footer from '../footer';
import Header from '../header';
import ContactPage from '../pages/contact';
import ExtensionPage from '../pages/extension';
import HomePage from '../pages/home';
import InfoPage from '../pages/info';
import LoginPage from '../pages/login';
import NoPage from '../pages/no-page';
import PricePage from '../pages/pricing';
import Popup from '../popup/popup';

const App = () => {
	const context = useBookmarkContext();
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path={ROUTES.HOME_PAGE} exact render={() => <HomePage context={context} />} />
				<Route path={ROUTES.LOGIN_PAGE} render={() => <LoginPage context={context} />} />
				<Route path={ROUTES.PRICE_PAGE} render={() => <PricePage context={context} />} />
				<Route path={ROUTES.CONTACT_PAGE} render={() => <ContactPage context={context} />} />
				<Route path={ROUTES.INFO_PAGE} render={() => <InfoPage context={context} />} />
				<Route path={ROUTES.EXTENSION_PAGE} render={() => <ExtensionPage context={context} />} />
				<Route component={NoPage} />
			</Switch>
			<Footer />
			<Popup />
		</React.Fragment>
	);
};

export default App;
