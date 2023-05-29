// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs ,addDoc} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qPLIITmIci2FGmtAIQNky6XQaPAS8FM",
  authDomain: "todolist2-d8acc.firebaseapp.com",
  projectId: "todolist2-d8acc",
  storageBucket: "todolist2-d8acc.appspot.com",
  messagingSenderId: "251798481415",
  appId: "1:251798481415:web:503a277ae0a72a818398a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database



export default db;