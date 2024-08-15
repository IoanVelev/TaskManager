"use client";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Datepicker,
} from "flowbite-react";
import styles from "./CreateTask.module.css";

export function CreateTask() {
    

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
          />
        </div>
        <div className={styles['date-picker']}>
        <div className="mb-2 block">
            <Label htmlFor="email2" value="Pick deadline" />
          </div>
          <Datepicker />
        </div>
        <div className={styles['check-box']}>
        <Checkbox id="remember" />
        <Label htmlFor="remember">Add as important</Label>
      </div>
        <Button className={styles["add-btn"]} type="button">
          Add task
        </Button>
      </form>
    </div>
  );
}
