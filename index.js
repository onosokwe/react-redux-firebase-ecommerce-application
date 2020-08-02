import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/firebase';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(firebase, fbConfig)
	)
);

const rrfProps = {
	firebase,
	config: fbConfig,
	useFireStoreForProfile: true,
	attachAuthReady: true,
	userProfile: 'users',
	dispatch: store.dispatch,
	createFirestoreInstance
};

ReactDOM.render(
<Provider store={store}>
	<ReactReduxFirebaseProvider {...rrfProps}>
		<App />
	</ReactReduxFirebaseProvider>
</Provider>,
document.getElementById("root")
);
