"use client";

import { Button, Card, Dropdown } from "flowbite-react";
import { doc, getDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function TaskCardDetails() {
  const { taskId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate('/');

  const fetch = async () => {
    const docRef = doc(db, 'tasks', taskId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const taskData = docSnap.data();
        setData(taskData);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

 const deleteTask = async () =>  {
    const dbref = collection(db, 'tasks');
    const delRef = doc(dbref, taskId);
    try {
        await deleteDoc(delRef);
        navigate('/');
    } catch (error) {
        alert(error);
    }
}

  return (
    <>
          <Card key={data.id}>
            <div className="flex justify-end px-4 pt-4">
              <Dropdown inline label="">
                <Dropdown.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="flex flex-col items-center pb-10">
              {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {data.description}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <Button
                  as={Link}
                  to={`/task/edit/${taskId}`}
                  className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Edit
                </Button>
                <Button
                   onClick={deleteTask}
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
    </>
  );
}
