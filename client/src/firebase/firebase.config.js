import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfOxkfc-XbkSxkps5g1kwsqaSfjeXQ2Y4",
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

export const app = initializeApp(firebaseConfig);