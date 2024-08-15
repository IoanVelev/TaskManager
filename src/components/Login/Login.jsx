"use client";

import { Button, Label, TextInput } from "flowbite-react";
import styles from "../../components/Form.module.css";
import errStyles from "../../components/ErrorMessage.module.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../contexts";

export function Login() {
  const { userLoggedIn } = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const signInHandler = (e) => {
    //e.preventDefault();
    
      doSignInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        let message = error.code.split("/")[1];
        let editedMessage = message.split("-").map(x => x.toUpperCase()).join(" ");
        return setErrorMessage(editedMessage);
      });
    }

  const emailChangeHanlder = (event) => setEmail(event.target.value);
  const passwordChangleHandler = (event) => setPassword(event.target.value);
  

  return (
    <>
    {userLoggedIn && (<Navigate to={'/'} />)}
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
            onChange={emailChangeHanlder}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" 
          type="password" 
          required shadow 
          onChange={passwordChangleHandler} />
        </div>

        <Button className={styles["btn-submit"]} type="button" onClick={signInHandler}>
          Login
        </Button>

        {errorMessage ? <p className={errStyles['login-err']}>{errorMessage}</p>: ""}

        <p>
          Don't have an account?
          <Link to={'/register'} className={styles["change-path-link"]}> Sign up</Link>
        </p>
      </form>
    </div>
    </>
    
  );
}
