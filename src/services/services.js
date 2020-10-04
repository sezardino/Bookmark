import {STATUS_TEXT} from '../const';

const checkValidity = (input) => {
	const value = input.value || '';
	input.setCustomValidity(' ');
	let validity = true;
	let status = STATUS_TEXT.SUCCESS;
	if (!value.includes('@')) {
		validity = false;
		status = STATUS_TEXT.TYPE_ERROR;
	}
	if (value.length === 0) {
		validity = false;
		status = STATUS_TEXT.LINE_TO_SHORT;
	}

	return [validity, status];
};

export {checkValidity};
