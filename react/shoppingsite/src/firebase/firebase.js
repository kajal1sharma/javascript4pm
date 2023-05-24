// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZhUcfaP7l_BMAAZojNVEigR_wPtcbaHA",
  authDomain: "ecomm-c9041.firebaseapp.com",
  projectId: "ecomm-c9041",
  storageBucket: "ecomm-c9041.appspot.com",
  messagingSenderId: "1080054968770",
  appId: "1:1080054968770:web:2c81a2bd3007e843f8665b",
  measurementId: "G-8170MG6VMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getProduct(db) {
    const productCol = collection(db, 'products');
    const productSnapshot = await getDocs(productCol);
    const productList =await productSnapshot.docs.map( doc => doc.data());
    //console.log(productList)
    return productList;
  }

  let  arr = await getProduct(db)




export {arr};
