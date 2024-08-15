import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "../contexts";
import { useState } from "react";

export const useFetch = async () => {
    const [data, setData] = useState([]);
    const { currentUser } = useAuth();
    const dbref = collection(db, "tasks");

    const snapshot = await getDocs(dbref);
    const fetchData = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})));
    const filteredData = fetchData.filter(({ ownerId }) => ownerId == currentUser.uid);
   
    
    return setData(filteredData);
  };





