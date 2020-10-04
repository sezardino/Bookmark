import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import App from './components/app/';
import './scss/style.scss';
import BookmarkProvider from './context';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BookmarkProvider>
				<ErrorBoundary>
					<Router>
						<App />
					</Router>
				</ErrorBoundary>
			</BookmarkProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
