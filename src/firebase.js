import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAngPU06m0uZjpi34WMYuC6kJxQhQO8FN4',
  authDomain: 'netflix-clone-8644a.firebaseapp.com',
  projectId: 'netflix-clone-8644a',
  storageBucket: 'netflix-clone-8644a.appspot.com',
  messagingSenderId: '978707294713',
  appId: '1:978707294713:web:bf1b5220079a3457853528',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
