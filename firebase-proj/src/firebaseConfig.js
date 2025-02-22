import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCHP4DG_hRkDWIEweBD53SvE-7wjQ18PqM",
    authDomain: "react-firebase-54856.firebaseapp.com",
    projectId: "react-firebase-54856",
    storageBucket: "react-firebase-54856.firebasestorage.app",
    messagingSenderId: "295292815033",
    appId: "1:295292815033:web:4d0ffa1b26328ca17cfd68",
    measurementId: "G-35F47M9Y14"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth;


