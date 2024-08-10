import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnr02LFCz06JrSOy2wEcwwHI31MbMnfjk",
  authDomain: "netflix-gpt-36506.firebaseapp.com",
  projectId: "netflix-gpt-36506",
  storageBucket: "netflix-gpt-36506.appspot.com",
  messagingSenderId: "356819011773",
  appId: "1:356819011773:web:ad0c1a81d3becf92298fd4",
  measurementId: "G-Y5L4EYGJPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
