import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
   apiKey: "AIzaSyAzotKwf0Tmauvdt0u17657UZpKBU6kqKg",
   authDomain: "shelbyfirebase.firebaseapp.com",
   projectId: "shelbyfirebase",
   storageBucket: "shelbyfirebase.appspot.com",
   messagingSenderId: "767978121192",
   appId: "1:767978121192:web:00f6b54b7b6ed523bfe65d"
 };
 initializeApp(firebaseConfig)
 const db = getFirestore()
 export { db }