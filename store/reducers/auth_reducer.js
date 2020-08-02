const initialState = {
	signInAuthError: null,
	signUpAuthError: null
}

const AuthReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'LOGIN_ERROR':
		console.log("Login error");
			return {
				...state,
				signInAuthError: 'Login failed'
			}
		case 'LOGIN_SUCCESS':
		console.log("Login success");
			return {
				...state,
				signInAuthError: null
			}
		case 'SIGNOUT_SUCCESS':
		console.log("Signout success");
			return {
				state
			}
		case 'SIGNUP_SUCCESS':
		console.log("Signup success");
			return {
				...state,
				signUpAuthError: null
			}
		case 'SIGNUP_ERROR':
		console.log("Signup error");
			return {
				...state,
				signUpAuthError: action.err.message
			}
		default:
			return state
	}
}

export default AuthReducer;