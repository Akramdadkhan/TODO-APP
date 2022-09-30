import Firebase from "firebase";

const FireaseConfig = Firebase.initializeApp({
  // copy and paste the config code here of firebase
  // apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  // authDomain: "xxxxxxxxxxx.firebaseapp.com",
  // databaseURL: "https://xxxxxxxxxxxxxxx.firebaseio.com",
  // projectId: "xxxxxxxxxxxxxxxxxx",
  // storageBucket: "xxxxxxxxxxxxx.appspot.com",
  // messagingSenderId: "xxxxxxxxxxxxxxxxxxx",
  // appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  // measurementId: "xxxxxxxxxxxxx",
});

const database = FireaseConfig.firestore();

export default database;
