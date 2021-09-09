import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';

describe('Test helper/fetch', () => {
	let token = '';

	test('fetchWithOut token should work properly', async () => {
		const user = {
			email: 'renzo@gmail.com',
			password: '123456',
		};
		const response = await fetchWithoutToken('auth', user, 'POST');
		const body = await response.json();

		token = body.token;

		expect(response instanceof Response).toBe(true);
		expect(body.ok).toBe(true);
	});

	test('fetchWithToken should work properly', async () => {
		localStorage.setItem('token', token);

		const response = await fetchWithToken('events');
		const body = await response.json();

		expect(response instanceof Response).toBe(true);
		expect(body.ok).toBe(true);
	});
});
