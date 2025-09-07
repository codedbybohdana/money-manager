import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0lQvlhqpRtswdGVfdllX9d0XTVqlHPS8",
  authDomain: "money-manager-76c2a.firebaseapp.com",
  projectId: "money-manager-76c2a",
  storageBucket: "money-manager-76c2a.firebasestorage.app",
  messagingSenderId: "781436023599",
  appId: "1:781436023599:web:bfc40962a71f10138427da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

//db
export const db = getFirestore(app);