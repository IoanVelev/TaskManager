"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../../components/Form.module.css";
import errStyles from "../../components/ErrorMessage.module.css";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { doCreateUserWithEmailAndPassword, doSignOut } from "../../firebase/auth";

export function Register() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signUpHandler = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      await doSignOut()
    navigate("/login");
    } catch (error) {
      let message = error.code.split("/")[1];
        let editedMessage = message
          .split("-")
          .map((x) => x.toUpperCase())
          .join(" ");
        setErrorMessage(editedMessage);
    }
  };

  const emailChangeHanlder = (event) => setEmail(event.target.value);
  const passwordChangleHandler = (event) => setPassword(event.target.value);

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
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
            <TextInput
              id="password2"
              type="password"
              required
              shadow
              onChange={passwordChangleHandler}
            />
          </div>

          <Button
            className={styles["btn-submit"]}
            type="button"
            onClick={signUpHandler}
          >
            Register new account
          </Button>
          {errorMessage ? (
            <p className={errStyles["register-err"]}>{errorMessage}</p>
          ) : (
            ""
          )}

          <p>
            Have an account?
            <Link to={"/login"} className={styles["change-path-link"]}>
              {" "}
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
