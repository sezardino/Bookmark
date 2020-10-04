import React from 'react';
import {Link} from 'react-router-dom';
import {usePopup} from '../../hooks';
import ROUTES from '../../routes';

const Popup = () => {
	const [active, changeActive] = usePopup(false);
	const isActive = active ? 'popup--active' : '';

	return (
		<div className={`popup ${isActive}`}>
			<div className="popup__container">
				<button type="button" className="button popup__close" onClick={changeActive}>
					<img src="./img/popup-close.svg" alt="close menu" />
				</button>
				<p className="img-wrapper popup__img pseudo pseudo--left">
					<img src="./img/illustration-features-tab-3.svg" alt="some alternative text for seo" />
				</p>
				<div className="popup__wrapper">
					<h2 className="popup__title title">Share your bookmarks</h2>
					<p className="popup__text text">
						Easily share your bookmarks and collections with others. Create a shareable link that
						you can send at the click of a button.
					</p>
					<Link
						to={ROUTES.INFO_PAGE}
						className="button button--popup button--blue"
						onClick={changeActive}>
						More Info
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Popup;
