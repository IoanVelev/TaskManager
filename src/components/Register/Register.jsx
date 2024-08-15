"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "../../components/Form.module.css";
import errStyles from "../../components/ErrorMessage.module.css";
import { useState } from "react";

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if (user) {
        navigate("/login");
      }
    })
    .catch((error) => {
      let message = error.code.split("/")[1];
      let editedMessage = message.split("-").map(x => x.toUpperCase()).join(" ");
      setErrorMessage(editedMessage);
    });
  }

  const emailChangeHanlder = (event) => setEmail(event.target.value);
  const passwordChangleHandler = (event) => setPassword(event.target.value);

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
            onChange={emailChangeHanlder}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow onChange={passwordChangleHandler}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        
        <Button className={styles['btn-submit']} type="submit" onClick={signUpHandler}>Register new account</Button>
        {errorMessage ? <p className={errStyles['register-err']}>{errorMessage}</p> : ""}

        <p>
          Have an account?
          <Link to={'/login'} className={styles["change-path-link"]}> Sign in</Link>
        </p>
      </form>
    </div>
    </>
  );
}
