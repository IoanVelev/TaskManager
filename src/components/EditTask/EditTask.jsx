"use client";
import {
    getDoc,
    doc,
    collection,
    updateDoc
} from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import {
  Button,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import styles from "../CreateTask/CreateTask.module.css";
import { useState, useEffect } from "react";

export function EditTask() {
    const dbref = collection(db, 'tasks');
    const { taskId } = useParams();
    const [data, setData] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isImportant, setIsImportant] = useState(false);


    const fetch = async () => {
        const docRef = doc(db, 'tasks', taskId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            const taskData = docSnap.data();
            console.log(taskData);
            
            setData(taskData);
            setTitle(taskData.title);
            setDescription(taskData.description);
            setIsImportant(taskData.isImportant);
        }
      };
    
      useEffect(() => {
        fetch();
      }, []);

    const update = async () => {
        const updateRef = doc(dbref, taskId);

       try {
        const docSnap = await updateDoc(updateRef, {title, description, isImportant});
       } catch (error) {
        alert(error);
       }
    
    }

  return (
    <div className={styles["form-div"]}>
      <form className={styles["form-element"]}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Enter task title" />
          </div>
          <TextInput
            id="task-title"
            placeholder="e.g. Watch a video from freeCodeCamp"
            type="text"
            required
            shadow
            defaultValue={data.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Description" />
          </div>
          <Textarea
            id="comment"
            placeholder="e.g.Watch react tutorial"
            required
            rows={4}
            defaultValue={data.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles['check-box']}>
        <input
        type="checkbox"
        id="checkbox"
        defaultChecked={data.isImportant}
        onChange={(e) => setIsImportant(e.target.checked)}
      />
      <label className={styles['check-text']} htmlFor="checkbox">Mark as important </label>
      </div>
        <Button className={styles["add-btn"]}
         type="button"
         onClick={update} 
         as={Link} 
         to={'/'}
         >
          Edit task
        </Button>
      </form>
    </div>
  )
}