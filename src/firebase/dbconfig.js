
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0HKBEX7Tl_M7nu2Cmv9cxAwys3kYXj4c",
  authDomain: "cilicon-5c013.firebaseapp.com",
  projectId: "cilicon-5c013",
  storageBucket: "cilicon-5c013.firebasestorage.app",
  messagingSenderId: "557438346898",
  appId: "1:557438346898:web:95ff2d4e6347884676a84b",
  measurementId: "G-4R49PCKBQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);