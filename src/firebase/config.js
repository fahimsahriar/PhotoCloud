// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import {getStorage} from 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8O3NZ8zQ4E20ehdgp_0b9wfZX-4lDFs4",
  authDomain: "photocloud-e21b7.firebaseapp.com",
  projectId: "photocloud-e21b7",
  storageBucket: "photocloud-e21b7.appspot.com",
  messagingSenderId: "936159817727",
  appId: "1:936159817727:web:90cd31814d3961135ec1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
// const projectFirestore = firebase.firestore().ref();
export { projectStorage};