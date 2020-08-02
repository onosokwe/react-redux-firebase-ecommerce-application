import firebase from 'firebase/app';
// import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
	apiKey: "AIzaSyBLQFVPRax_Lnx1r7a5GdMCH8ogIMvdLRY",
	authDomain: "devamplify-ecommerce-app.firebaseapp.com",
	databaseURL: "https://devamplify-ecommerce-app.firebaseio.com",
	projectId: "devamplify-ecommerce-app",
	storageBucket: "devamplify-ecommerce-app.appspot.com",
	messagingSenderId: "751671393822",
	appId: "1:751671393822:web:48565869e344eb82d0780f",
	measurementId: "G-M7M4ZWCEE5"
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({cacheSizeBytes: 1048576});

// const storage = firebase.storage()

// export {storage, fbConfig as default}; 

export default fbConfig; 