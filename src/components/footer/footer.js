import React from 'react';
import Form from '../form';
import Nav from '../nav';

const Footer = () => {
	return (
		<footer>
			<section className="subscribe">
				<h2 className="hidden">Subscribe on updates</h2>
				<div className="container subscribe__container">
					<p className="subscribe__count">
						<span className="counter">35.000</span> + already joined
					</p>
					<h3 className="subscribe__title">Stay up-to-date with what we're doing</h3>
					<Form />
				</div>
			</section>
			<section className="footer">
				<h2 className="hidden">More information you can find here</h2>
				<div className="container footer__container">
					<p className="logo footer__logo">
						<img src="./img/logo-footer.svg" alt="company logo" />
					</p>
					<Nav />
				</div>
			</section>
		</footer>
	);
};

export default Footer;
