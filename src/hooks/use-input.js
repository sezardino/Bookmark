import {useState} from 'react';

const useInput = () => {
	const [value, setValue] = useState('');

	const changeValue = (value) => {
		setValue(value);
	};

	return [value, changeValue];
};

export default useInput;
