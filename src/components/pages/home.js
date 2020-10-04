import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ROUTES from '../../routes';
import BrowsersList from '../browsers-list';
import Questions from '../questions';
import {ActionCreator} from '../../reducer/';
import {useLoad} from '../../hooks';
import FeaturesContent from '../features-content';

const HomePage = (props) => {
	const {features = [], browsersList = [], faq = [], getData} = props;

	useLoad(getData);
	return (
		<main>
			<h1 className="hidden">Bookmark Manager</h1>
			<section className="hero">
				<div className="container hero__container">
					<p className="img-wrapper hero__img pseudo pseudo--right">
						<img src="./img/illustration-hero.svg" alt="how its looks like" />
					</p>
					<div className="description hero__description">
						<h2 className="description__title title">A Simple Bookmark Manager</h2>
						<p className="description__text text">
							A clean and simple interface to organize your favourite websites. Open a new browser
							tab and see your sites load instantly. Try it for free.
						</p>
						<div className="description__buttons">
							<Link
								to={ROUTES.EXTENSION_PAGE}
								className="button button--hero button--hero-google button--blue">
								Get in on Chrome
							</Link>
							<Link
								to={ROUTES.EXTENSION_PAGE}
								className="button button--hero button--hero-fox button--white">
								Get in on Firefox
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="features" id="features">
				<div className="container features__container">
					<h2 className="features__title title">Features</h2>
					<p className="features__text text">
						Our aim is to make it quick easy for you to access your favourite websites. Your
						bookmarks sync between yuor devices so you can access them on the go.
					</p>
					<FeaturesContent data={features} />
				</div>
			</section>
			<section className="download">
				<h2 className="hidden">How to download</h2>
				<div className="container download__container">
					<h3 className="download__title title">Download the extension</h3>
					<p className="download__text">
						We've got more browsers in the pipeline. Please do let us know if you've got a favourite
						you'd like us to prioritize.
					</p>

					<BrowsersList data={browsersList} />
				</div>
			</section>
			<section className="faq">
				<div className="container faq__container">
					<h2 className="faq__title title">Frequently Asked Questions</h2>
					<p className="faq__text text">
						Here are some of our FAQs. If you have any other questions you'd like answered please
						feel free email us.
					</p>
					<Questions data={faq} listCount={4} />
				</div>
			</section>
		</main>
	);
};

const mapStateToProps = (state) => ({
	features: state.features,
	faq: state.faq,
	browsersList: state.browsersList,
});
const mapDispatchToProps = (dispatch, ownProps) => {
	const {context} = ownProps;
	return {
		getData: () => {
			context.getFeatures().then((data) => dispatch(ActionCreator.GET_FEATURES(data)));
			context.getBrowsersList().then((data) => dispatch(ActionCreator.GET_BROWSERS_LIST(data)));
			context.getFAQ().then((data) => dispatch(ActionCreator.GET_FAQ(data)));
		},
	};
};

export {HomePage};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
