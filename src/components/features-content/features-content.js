import React from 'react';
import {Link} from 'react-router-dom';
import {useActive} from '../../hooks';
import ROUTES from '../../routes';

const FeaturesContent = (props) => {
	const {data} = props;
	const [activeTab, changeActiveTab] = useActive(1);
	return (
		<React.Fragment>
			<ul className="tabs features__tabs">
				{data.map(({id, tab}) => {
					const isActiveTab = activeTab === id ? 'tabs__item--active' : '';
					return (
						<li
							key={id}
							tabIndex="0"
							className={`tabs__item ${isActiveTab}`}
							onClick={() => changeActiveTab(id)}>
							{tab}
						</li>
					);
				})}
			</ul>
			<ul className="content features__content">
				{data.map(({id, text, img, title}) => {
					const isActiveContent = activeTab === id ? 'content__item--active' : '';
					return (
						<li key={id} className={`content__item ${isActiveContent}`}>
							<p className="img-wrapper content__img pseudo pseudo--left">
								<img src={img} alt={title} />
							</p>
							<div className="content__wrapper">
								<h2 className="content__title title">{title}</h2>
								<p className="content__text text">{text}</p>
								<Link
									to={ROUTES.EXTENSION_PAGE}
									className="button button--content button--blue content__button">
									More Info
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
};

export default FeaturesContent;
