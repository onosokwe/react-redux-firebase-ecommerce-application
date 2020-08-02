import AuthReducer from './auth_reducer';
import ProductReducer from './products_reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth_reducer: AuthReducer,
	products_reducer: ProductReducer,
	firestoreData: firestoreReducer,
	firebaseAuth: firebaseReducer
})

export default rootReducer;