const firebase = require('firebase');
const admin = require('firebase-admin');
require("dotenv").config();

// Firebase config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();
const tasks = db.collection("tasks");

const serviceAccount = require('./FirebaseService.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Firebase Authentication
const auth = firebase.auth();

module.exports = {
  admin,
  tasks,
  auth,
  createUserWithEmailAndPassword: (email, password) => auth.createUserWithEmailAndPassword(email, password),
  signInWithEmailAndPassword: (email, password) => auth.signInWithEmailAndPassword(email, password),
  signOut: () => auth.signOut(),
  sendEmailVerification: () => auth.currentUser.sendEmailVerification(),
  sendPasswordResetEmail: (email) => auth.sendPasswordResetEmail(email)
};
