import firebase from 'firebase'
import 'firebase/auth'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwPJhfT1MzU3Tna-Osgj3fDtl3W9G2MVQ",
    authDomain: "ankshady-ca89c.firebaseapp.com",
    databaseURL: "https://ankshady-ca89c.firebaseio.com",
    projectId: "ankshady-ca89c",
    storageBucket: "ankshady-ca89c.appspot.com",
    messagingSenderId: "491138142773",
    appId: "1:491138142773:web:acea90648862572667977c"
});

var db = firebaseApp.firestore();
export {db};