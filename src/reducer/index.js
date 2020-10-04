const initialState = {
	features: [],
	faq: [],
	browsersList: [],
};

const ActionType = {
	GET_FEATURES: 'GET_FEATURES',
	GET_FAQ: 'GET_FAQ',
	GET_BROWSERS_LIST: 'GET_BROWSERS_LIST',
};

const ActionCreator = {
	GET_FEATURES: (data) => ({type: ActionType.GET_FEATURES, payload: data}),
	GET_FAQ: (data) => ({type: ActionType.GET_FAQ, payload: data}),
	GET_BROWSERS_LIST: (data) => ({type: ActionType.GET_BROWSERS_LIST, payload: data}),
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionType.GET_FEATURES:
			return {...state, features: payload};
		case ActionType.GET_FAQ:
			return {...state, faq: payload};
		case ActionType.GET_BROWSERS_LIST:
			return {...state, browsersList: payload};
		default:
			return state;
	}
};
export {ActionType, ActionCreator};
export default reducer;
