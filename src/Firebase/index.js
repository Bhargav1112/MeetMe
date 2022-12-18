import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDapBylTVeQT4lc2B0mmu47domXHTmJL40",
    authDomain: "meetme-bf5c1.firebaseapp.com",
    projectId: "meetme-bf5c1",
    storageBucket: "meetme-bf5c1.appspot.com",
    messagingSenderId: "218106755750",
    appId: "1:218106755750:web:997d7bd251ed0f708c1267",
    measurementId: "G-C2CVX8MBPV"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);