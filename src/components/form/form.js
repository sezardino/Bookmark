import React, {useRef} from 'react';
import {useInput, useSubscribe} from '../../hooks';

const Form = () => {
	const inputEl = useRef(null);
	const [inputValue, changeInputValue] = useInput();

	const [submit, validity, submitHandler, statusMessage] = useSubscribe(inputEl.current);

	const formStatus = submit ? (validity ? 'form--success' : 'form--error') : '';
	return (
		<form
			action="#"
			method="post"
			className={`form subscribe__form ${formStatus}`}
			onSubmit={(evt) => evt.preventDefault()}>
			<label htmlFor="mail" className="form__error">
				<input
					type="email"
					id="mail"
					name="mail"
					minLength={3}
					placeholder="Enter your email address"
					className="form__mail"
					ref={inputEl}
					value={inputValue}
					onChange={(evt) => changeInputValue(evt.target.value)}
				/>
				<p className="img-wrapper form__img">
					<img src="./img/icon-error.svg" alt="error" />
				</p>
				<span className="form__indicator">{statusMessage}</span>
			</label>
			<button
				type="submit"
				className="button button--red button--form form__button"
				onClick={submitHandler}>
				Contact us
			</button>
		</form>
	);
};

export default Form;
