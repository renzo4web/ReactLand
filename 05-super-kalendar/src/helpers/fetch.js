const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
	// http://localhost:4000/api/{endopoint}

	const url = `${baseUrl}/${endpoint}`;

	if (method === 'GET') {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	}
};

export const fetchWithToken = (endpoint, data, method = 'GET') => {
	// http://localhost:4000/api/{endopoint}

	const url = `${baseUrl}/${endpoint}`;
	const token = localStorage.getItem('token') || '';

	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				'x-token': token,
			},
		});
	} else {
		console.log(method);
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
				'x-token': token,
			},
			body: JSON.stringify(data),
		});
	}
};
