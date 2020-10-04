import React from 'react';
import {useActive} from '../../hooks';

const Question = (props) => {
	const {
		activeQuestion,
		onQuestionClick,
		data: {question, answer, id},
	} = props;
	const [active, changeActive] = useActive(activeQuestion);

	const questionHolder = () => {
		onQuestionClick(id);
		changeActive();
	};
	const isActive = id === activeQuestion && active ? 'questions__item--active' : '';

	return (
		<li className={`questions__item ${isActive}`}>
			<button
				className="button button--questions questions__button"
				onClick={() => questionHolder()}>
				{question}
				<span className="button button--arrow ">
					<svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
						<path className="arrow" fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
					</svg>
				</span>
			</button>
			<p className="questions__text">{answer}</p>
		</li>
	);
};

export default Question;
