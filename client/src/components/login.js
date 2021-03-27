import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const submitHandler = (e) => {
    e.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          Email:
          <input onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="">
          Password:
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
