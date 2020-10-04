import {URL} from '../const';

export default class Api {
	constructor() {
		this.URL = '../data-base/';
	}

	getResources = async (url) => {
		const response = await fetch(`${this.URL}${url}`);
		if (!response.ok) {
			throw new Error(`Error status ${response.status}`);
		}

		const data = await response.json();
		return data;
	};

	getFeatures = async () => {
		const data = await this.getResources(URL.FEATURES());
		return data;
	};

	getBrowsersList = async () => {
		const data = await this.getResources(URL.BROWSERS_LIST());
		return data.map(this._transformBrowsersList);
	};

	getFAQ = async () => {
		const data = await this.getResources(URL.FAQ());
		return data;
	};

	_transformBrowsersList = (data) => ({
		id: data.id,
		name: data.name,
		minVersion: data.min_version,
		img: data.img,
	});
}
