import {
    collection,
    getDoc,
    deleteDoc,
    doc,
    updateDoc,
    getDocs,
    onSnapshot,
    addDoc
} from "firebase/firestore";

import { db } from './firebase';


export const createData = async (collectionName, data) => {
try {
    const docRef = doc(db, collectionName);
    await setDoc(docRef, data);
} catch (error) {
    
}
}

