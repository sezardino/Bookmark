import React from 'react';
import Question from './question';
import {useActive} from '../../hooks';

const Questions = (props) => {
	const {data, listCount} = props;
	const [activeQuestion, changeActiveQuestion] = useActive();
	const [fullList, changeFullList] = useActive();

	const count = fullList ? data.length : listCount;
	return (
		<React.Fragment>
			<ul className="questions faq__questions">
				{data.map((item, index) => {
					if (index + 1 <= count) {
						return (
							<Question
								key={item.id}
								data={item}
								activeQuestion={activeQuestion}
								onQuestionClick={changeActiveQuestion}
							/>
						);
					}
				})}
			</ul>
			<button
				type="button"
				className="button button--blue faq__button"
				onClick={() => changeFullList()}>
				{!fullList && 'More Questions'}
				{fullList && 'Hide Questions'}
			</button>
		</React.Fragment>
	);
};

export default Questions;
