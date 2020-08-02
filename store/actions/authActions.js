export const signIn = (credentials) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();
		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(() => {
			dispatch({
				type: 'LOGIN_SUCCESS'
			})
		}).catch((err) => {
			dispatch({
				type: 'LOGIN_ERROR', err
			})
		})
	}
}

export const signOut = () => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();
		firebase.auth().signOut().then(() => {
			dispatch({
				type: 'SIGNOUT_SUCCESS'
			})
		})
	}
}

export const signUp = (newGuy) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newGuy.email,
			newGuy.password
		).then((res) => {
			return firestore.collection('users').doc(res.user.uid).set({
				name: newGuy.name,
				phone: newGuy.phone,
				address: newGuy.address,
				initials: newGuy.name[0] + newGuy.name[0]
			})
		}).then(() => {
			dispatch({
				type: 'SIGNUP_SUCCESS'
			})
		}).catch((err) => {
			dispatch({
				type: 'SIGNUP_ERROR', err
			})
		})
	}
}