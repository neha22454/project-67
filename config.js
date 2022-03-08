import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC2MNlwODM-y8LeC3Tt3h21MR67_smwKC4",
    authDomain: "pro-67-e31b1.firebaseapp.com",
    projectId: "pro-67-e31b1",
    storageBucket: "pro-67-e31b1.appspot.com",
    messagingSenderId: "944273820020",
    appId: "1:944273820020:web:d9d67979006a41d4580421",
    measurementId: "G-LL1TES4RH5"


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();