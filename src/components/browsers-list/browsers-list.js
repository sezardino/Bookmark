import React from 'react';
import {Link} from 'react-router-dom';
import ROUTES from '../../routes';

const BrowsersList = (props) => {
	const {data} = props;
	return (
		<ul className="download__cards cards">
			{data.map(({id, name, minVersion, img}) => (
				<li key={id} className="cards__item">
					<p className="img-wrapper cards__img">
						<img src={img} alt={`${name} logotype`} />
					</p>
					<h3 className="cards__title title">Add to Chrome</h3>
					<p className="cards__subtitle">Minimum version {minVersion}</p>
					<Link
						to={ROUTES.EXTENSION_PAGE}
						className="button button--blue button--cards cards__button">
						Add &amp; Instal Extension
					</Link>
				</li>
			))}
		</ul>
	);
};

export default BrowsersList;
