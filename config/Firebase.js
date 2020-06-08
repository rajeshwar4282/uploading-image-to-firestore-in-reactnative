import firebase, { firestore } from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDYUN9o8ViC1uFs3OlGhXRY5sc6sy1Fwg4",
    authDomain: "cardpay-5a0c2.firebaseapp.com",
    databaseURL: "https://cardpay-5a0c2.firebaseio.com",
    projectId: "cardpay-5a0c2",
    storageBucket: "cardpay-5a0c2.appspot.com",
    messagingSenderId: "467588252342",
    appId: "1:467588252342:web:a22115d964ac6d6bf7dc17",
    measurementId: "G-QM36RWVGC7"
}
firebase.initializeApp(firebaseConfig)
export const db =  firebase.firestore();

export default firebase

