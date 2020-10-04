import React from 'react';
import Api from './services/api';

const BookmarkContext = React.createContext();

const BookmarkProvider = (props) => {
	const {children, language} = props;
	return <BookmarkContext.Provider value={new Api(language)}>{children}</BookmarkContext.Provider>;
};

export {BookmarkContext};
export default BookmarkProvider;
