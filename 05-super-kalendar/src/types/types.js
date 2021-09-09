export const types = {
	//Calendar Types
	eventSetActive: '[Event] Set active',

	eventStartAddNew: '[Event] Start add new',
	eventAddNew: '[Event] Add new', // only work if the eventStartAddNew resolve
	eventCleanActive: '[Event] Remove active',
	eventUpdated: '[Event] Updated',
	eventDeleted: '[Event] Deleted',
	eventLoaded: '[Event] Events loaded',
	eventCleanAll: '[Event] Events all clean', // when the users logout

	// Auth
	authCheckingFinish: '[Auth] Checking login state finish',
	// Auth Login
	authStartLogin: '[Auth] Start Login',
	authLogin: '[Auth] Login',
	//Auth Register
	authStartRegister: '[Auth] Start Register',
	authStartTokenRenew: '[Auth] Start token renew',
	authLogout: '[Auth Logout]',
};
