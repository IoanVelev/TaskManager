"use client";

import { Button, Label, TextInput } from "flowbite-react";
import styles from "../../components/Form.module.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className={styles["form-div"]}>
      <form className={styles["inner-form"]}>
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

        <Button className={styles["btn-submit"]} type="submit">
          Login
        </Button>
        <p>
          Don't have an account?
          <Link as={Link} to={'/register'} className={styles["change-path-link"]}> Sign up</Link>
        </p>
      </form>
    </div>
  );
}
