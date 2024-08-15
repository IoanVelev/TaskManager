"use client";
import {
    collection,
    addDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase/firebase';
import {
  Button,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import styles from "./CreateTask.module.css";
import { useAuth } from "../../contexts";
import { useState } from "react";

export function CreateTask() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let [isImportant, setIsImportant] = useState(false);
    const currentUserId = currentUser.uid;

    const dbref = collection(db, 'tasks');

    const addTask = async () => {
        const addData = await addDoc(dbref, {title, description, isImportant, ownerId: currentUserId});
        navigate('/');
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles['check-box']}>
        <input
        type="checkbox"
        id="checkbox"
        checked={isImportant}
        onChange={() => setIsImportant(!isImportant)}
      />
      <label className={styles['check-text']} htmlFor="checkbox">Mark as important </label>
      </div>
        <Button className={styles["add-btn"]} type="button" onClick={addTask}>
          Add task
        </Button>
      </form>
    </div>
  );
}
