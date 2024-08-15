"use client";
import styles from "../../App.module.css";
import { Button, Card } from "flowbite-react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";


export function TaskCard() {
  const dbref = collection(db, "tasks");
  const [data, setData] = useState([]);
  const { currentUser } = useAuth();
  
  const fetch = async () => {
    const snapshot = await getDocs(dbref);
    const fetchData = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})));
    const filteredData = fetchData.filter(({ ownerId }) => ownerId == currentUser.uid);
   
    setData(filteredData);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className={styles["task-list"]}>
        {data.map(data => {
          return (
            <>
              <Card className={styles['task-card']} key={data.title}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <Button as={Link} to={`/task/details/${data.id}`}>
                  Details
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
