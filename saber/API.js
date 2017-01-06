import { ajax } from 'jquery';

class API {
	constructor(model = null) {
		this.model = model;
	}

	list(params = null) {
		return API.get(`/${this.model}`, params);
	}

	create(data) {
		return API.post(`/${this.model}`, null, data);
	}

	update(id, data) {
		return API.put(`/${this.model}/${id}`, null, data);
	}

	read(id) {
		return API.get(`/${this.model}/${id}`);
	}

	delete(id) {
		return API.delete(`/${this.model}/${id}`);
	}

	static get(url, params) {
		return this._fetch('GET', this._buildPath(url, params));
	}

	static post(url, params, data) {
		return this._fetch('POST', this._buildPath(url, params), data);
	}

	static put(url, params, data) {
		return this._fetch('PUT', this._buildPath(url, params), data);
	}

	static delete(url, params) {
		return this._fetch('DELETE', this._buildPath(url, params));
	}

	static _buildPath(url, params = null) {
		if (!params) {
			return url;
		}
		let getParams = [];
		for ([key, value] of Object.entries(params)) {
			getParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		}
		return `${url}?${getParams.join('&')}`;
	}

	static _fetch(method, url, data = null) {
		let config = {
			method,
			url,
			data,
		};

		if (data && data instanceof FormData) {
			config.processData = false;
			config.contentType = false;
		}
		return new Promise((resolve, reject) => {
			ajax(config)
				.done((data) => { resolve(data) })
				.fail((jqXHR) => {
					reject(jqXHR);
				})
			}).then(json => json)
			.catch(xhr => {
				if ((xhr.status == 403) || (xhr.status == 404)) {
					//redirect
					return
				}
				throw Error('Ajax call failed!')
			});
	}
}
export default API;
