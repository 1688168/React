import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy91YP8qWnUKOkSPBJc_-dPMf9Sbqn6b4",
  authDomain: "my-cats-db.firebaseapp.com",
  projectId: "my-cats-db",
  storageBucket: "my-cats-db.appspot.com",
  messagingSenderId: "626025340036",
  appId: "1:626025340036:web:bd06002729f6b71ea9f6d1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
