import {useContext} from 'react';
import {BookmarkContext} from '../context';

const useBookmarkContext = () => {
	return useContext(BookmarkContext);
};

export default useBookmarkContext;
