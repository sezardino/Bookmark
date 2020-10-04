import {useActive} from '.';
import {STATUS_TEXT} from '../const';
import {checkValidity} from '../services';

const useSubscribe = (element) => {
	const [validity, changeValidity] = useActive(false);
	const [submit, changeSubmit] = useActive();
	const [statusMessage, changeStatusMessage] = useActive();
	const submitHandler = () => {
		if (element) {
			const [valid, status] = checkValidity(element);
			changeStatusMessage(status);
			changeValidity(valid);
		} else {
			changeValidity(false);
			changeStatusMessage(STATUS_TEXT.LINE_TO_SHORT);
		}
		changeSubmit(true);
	};

	return [submit, validity, submitHandler, statusMessage];
};

export default useSubscribe;
