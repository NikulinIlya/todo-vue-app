import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDqjs391mSEuT7nItBKgAYzOd8ZQoxH73g",
    authDomain: "todos-ceef3.firebaseapp.com",
    databaseURL: "https://todos-ceef3.firebaseio.com",
    projectId: "todos-ceef3",
    storageBucket: "todos-ceef3.appspot.com",
    messagingSenderId: "981326577202"
};

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true})

export default firestore