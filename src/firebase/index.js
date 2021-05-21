import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.js';

var app = firebase.initializeApp(firebaseConfig);

export default app;
