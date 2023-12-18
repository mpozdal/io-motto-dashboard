import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDnejJuQhTpXo20-er28sJdkoVVJ--IxPQ',
	authDomain: 'motto-app-127a3.firebaseapp.com',
	databaseURL:
		'https://motto-app-127a3-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'motto-app-127a3',
	storageBucket: 'motto-app-127a3.appspot.com',
	messagingSenderId: '446282516539',
	appId: '1:446282516539:web:a235c1a772883503c0f41e',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
