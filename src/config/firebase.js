
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9
const firebaseConfig = {
  apiKey: "AIzaSyDs20KFghRqrNqDYYyV8HyOP4L8aEvt8MA",
  authDomain: "doggies-api.firebaseapp.com",
  databaseURL: "https://doggies-api-default-rtdb.firebaseio.com",
  projectId: "doggies-api",
  storageBucket: "doggies-api.appspot.com",
  messagingSenderId: "739637926998",
  appId: "1:739637926998:web:871308095808fc1ba36ff7",
  measurementId: "G-LSEBHQN2CV"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};