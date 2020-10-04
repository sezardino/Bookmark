import {useState} from 'react';

const useActive = (current) => {
	const [active, setActive] = useState(current || false);
	const activeChange = (current = '') => {
		if (current.toString().length > 0) {
			setActive(current);
			return;
		} else {
			setActive((prev) => !prev);
			return;
		}
	};
	return [active, activeChange];
};

export default useActive;
