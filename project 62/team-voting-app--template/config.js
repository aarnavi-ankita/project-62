import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyAV2ZxYKnLRGqywEiGFckJIawUbsjdSlsM",
  authDomain: "project-58-45ced.firebaseapp.com",
  databaseURL: "https://project-58-45ced-default-rtdb.firebaseio.com",
  projectId: "project-58-45ced",
  storageBucket: "project-58-45ced.appspot.com",
  messagingSenderId: "726479072858",
  appId: "1:726479072858:web:b0ff1ff9db4c5b05333263"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();