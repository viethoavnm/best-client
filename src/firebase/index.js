import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig.js';
import 'firebase/analytics';

const setup = () => {
  var app = firebase.initializeApp(firebaseConfig);
  app.analytics().logEvent('screen_view');
  return app;
};

export default setup;
