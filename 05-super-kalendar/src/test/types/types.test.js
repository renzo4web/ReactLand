import { types } from '../../types/types';
describe('Test types', () => {
	test('should types be equal', () => {
		expect(types).toStrictEqual({
			eventSetActive: '[Event] Set active',
			eventStartAddNew: '[Event] Start add new',
			eventAddNew: '[Event] Add new',
			eventCleanActive: '[Event] Remove active',
			eventUpdated: '[Event] Updated',
			eventDeleted: '[Event] Deleted',
			eventLoaded: '[Event] Events loaded',
			eventCleanAll: '[Event] Events all clean',
			authCheckingFinish: '[Auth] Checking login state finish',
			authStartLogin: '[Auth] Start Login',
			authLogin: '[Auth] Login',
			authStartRegister: '[Auth] Start Register',
			authStartTokenRenew: '[Auth] Start token renew',
			authLogout: '[Auth Logout]',
		});
	});
});
