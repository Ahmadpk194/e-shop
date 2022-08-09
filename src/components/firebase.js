import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCuZhgluCQ4Jb0EeY0JhmDp4ybTGL4d5sQ",
  authDomain: "eshop-9a127.firebaseapp.com",
  projectId: "eshop-9a127",
  storageBucket: "eshop-9a127.appspot.com",
  messagingSenderId: "108899597795",
  appId: "1:108899597795:web:79b4f750abf99db73a34d6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Custom hook
export function useAuth() {
  const [currUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currUser;
}
