import React from 'react';
import {Link} from 'react-router-dom';

const NoPage = () => {
	return (
		<div className="some-page">
			<h1 className="main-title">Wrong address</h1>
			<Link to="/">To Home Page</Link>
		</div>
	);
};

export default NoPage;
