import React from 'react';

const ErrorIndicator = () => {
	return (
		<div className={`popup popup--active`}>
			<div className="popup__container">
				<div className="popup__wrapper">
					<h2 className="popup__title">Something goes wrong! reload browser</h2>
				</div>
			</div>
		</div>
	);
};

export default ErrorIndicator;
