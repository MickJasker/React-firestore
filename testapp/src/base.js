import * as firebase from 'firebase';
import 'firebase/firestore';
import rebase from 're-base';

const config = {
    apiKey: "AIzaSyBW7O9pa9U-rPMnDEcG_zSUG4F4vrcM--0",
    authDomain: "fitnessapp-e3fc4.firebaseapp.com",
    databaseURL: "https://fitnessapp-e3fc4.firebaseio.com",
    projectId: "fitnessapp-e3fc4",
    storageBucket: "fitnessapp-e3fc4.appspot.com",
    messagingSenderId: "289898149579"
};

const app = firebase.initializeApp(config);
const fb = rebase.createClass(app.firestore());
const firestore = firebase.firestore();
export {app, fb, firestore}