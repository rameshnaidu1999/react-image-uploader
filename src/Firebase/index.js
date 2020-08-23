import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZjkgXUE2tXW94TOLWjtb1cIu7EpCdnuU",
    authDomain: "rameshimageuploader.firebaseapp.com",
    databaseURL: "https://rameshimageuploader.firebaseio.com",
    projectId: "rameshimageuploader",
    storageBucket: "rameshimageuploader.appspot.com",
    messagingSenderId: "511610756578",
    appId: "1:511610756578:web:4c9f6d9eb5deb9dc0a6dbb",
    measurementId: "G-PBEKZPVTJT"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export { firebase, storage as default };
