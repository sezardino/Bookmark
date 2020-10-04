import {useState} from 'react';

const {useEffect, useRef} = require('react');

const usePopup = () => {
	const [open, setOpen] = useState(false);
	const wasOpened = useRef(false);
	const marginRight = window.innerWidth - document.body.clientWidth;

	const openPopup = () => {
		setOpen(true);
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = marginRight + 'px';
	};
	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = '';
		document.body.style.marginRight = '';
	};

	useEffect(() => {
		setTimeout(() => {
			openPopup();
			wasOpened.current = true;
		}, 30000);
	}, []);

	useEffect(() => {
		const mousemoveHandler = (evt) => {
			if (evt.pageY < 50 && !wasOpened.current) {
				openPopup();
				wasOpened.current = true;
			}
		};
		setTimeout(() => document.addEventListener('mousemove', (evt) => mousemoveHandler(evt)), 5000);
		return () => {
			document.removeEventListener('mousemove', (evt) => mousemoveHandler(evt));
		};
	}, []);
	return [open, closePopup];
};

export default usePopup;
