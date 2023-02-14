
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyADMF9ee3sE9ZUUxwxljeptHEmGcJmfqwE",
    authDomain: "cafedonjulio-e8565.firebaseapp.com",
    projectId: "cafedonjulio-e8565",
    storageBucket: "cafedonjulio-e8565.appspot.com",
    messagingSenderId: "960020169777",
    appId: "1:960020169777:web:9c5f264f5b7aa211158110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}