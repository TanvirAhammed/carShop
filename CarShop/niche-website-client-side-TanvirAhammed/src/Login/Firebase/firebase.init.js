import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initialzefirebase = () => {

    initializeApp(firebaseConfig);
}

export default initialzefirebase;