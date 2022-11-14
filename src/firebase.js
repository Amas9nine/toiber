import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC8G_qVbx9Dlz7bM86mqcgOqSVXRMOtR6w",
  authDomain: "toiber-46cc7.firebaseapp.com",
  projectId: "toiber-46cc7",
  storageBucket: "toiber-46cc7.appspot.com",
  messagingSenderId: "1092955941875",
  appId: "1:1092955941875:web:45e127c534105f38678086",
  measurementId: "G-DX7TXYW7W1"
});
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export default firebase;
