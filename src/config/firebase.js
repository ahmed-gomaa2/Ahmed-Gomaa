import firebase from "firebase";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0VwtxH376AdA7KLThNEcHhZYAPVPSaRk",
    authDomain: "ahmed-gomaa-f5dbc.firebaseapp.com",
    databaseURL: "https://ahmed-gomaa-f5dbc.firebaseio.com",
    projectId: "ahmed-gomaa-f5dbc",
    storageBucket: "ahmed-gomaa-f5dbc.appspot.com",
    messagingSenderId: "337797471913",
    appId: "1:337797471913:web:49637e88a35838f12d93b8",
    measurementId: "G-PT575LRDBV"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase;
