"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles['register-div']}>
        <h1 className={styles['register-h1']}>Register</h1>
      <form className={styles['register-form']}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the terms and conditions
          </Label>
        </div>
        <Button className={styles['register-btn']} type="submit">Register new account</Button>
      </form>
    </div>
  );
}
