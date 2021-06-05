import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAIwZf6y3PLsEBXA-9cMuEbW_BtBIyDPzA',
    authDomain: 'clone-7dbdc.firebaseapp.com',
    projectId: 'clone-7dbdc',
    storageBucket: 'clone-7dbdc.appspot.com',
    messagingSenderId: '621938110041',
    appId: '1:621938110041:web:52f2b2530030ffcd690b48',
    measurementId: 'G-ZFNRRFWBLN',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
