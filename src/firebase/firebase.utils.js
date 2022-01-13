import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDslviibKkn9jLUvA5CaMgWqZqgpmD7l1o",
  authDomain: "ecommerce-30b29.firebaseapp.com",
  projectId: "ecommerce-30b29",
  storageBucket: "ecommerce-30b29.appspot.com",
  messagingSenderId: "698424242791",
  appId: "1:698424242791:web:bf5d436b3682ec1469dac2",
  measurementId: "G-N4MYFG46WC",
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData = null
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const created = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        created,
        additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
