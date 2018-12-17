import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA2Sv0qTovECmSyx6kXV6_teYyxWTJdfgs",
    authDomain: "first-flight-with-friends-taha.firebaseapp.com",
    databaseURL: "https://first-flight-with-friends-taha.firebaseio.com",
    projectId: "first-flight-with-friends-taha",
    storageBucket: "",
    messagingSenderId: "801617888521"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
