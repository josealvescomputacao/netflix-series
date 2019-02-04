import  firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDnWS34xUd8Rpj-07-u91cB0Lf3QMarHW0",
    authDomain: "netflix-series.firebaseapp.com",
    databaseURL: "https://netflix-series.firebaseio.com",
    projectId: "netflix-series",
    storageBucket: "netflix-series.appspot.com",
    messagingSenderId: "204532067959"
}
firebase.initializeApp(config)

export const database = firebase.database()  
export const auth = firebase.auth()
