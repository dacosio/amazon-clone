import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXt38jOZC6HCz7-ego-zs0sJSZUmXacvM",
    authDomain: "clone-9db5f.firebaseapp.com",
    databaseURL: "https://clone-9db5f.firebaseio.com",
    projectId: "clone-9db5f",
    storageBucket: "clone-9db5f.appspot.com",
    messagingSenderId: "713492363836",
    appId: "1:713492363836:web:6fc79668b5f86822546139",
    measurementId: "G-PC3LTV9CXW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};