"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import styles from "../../components/Form.module.css";

export function Register() {
  return (
    <>
    <div className={styles['form-div']}>
      <form className={styles['inner-form']}>
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
        
        <Button className={styles['btn-submit']} type="submit">Register new account</Button>

        <p>
          Have an account?
          <Link as={Link} to={'/login'} className={styles["change-path-link"]}> Sign in</Link>
        </p>
      </form>
      
    </div>
    
    </>
  );
}
