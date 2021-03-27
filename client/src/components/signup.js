import React, { useState } from "react";
import UserPool from "../UserPool";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div>
      <h3>Sign Up</h3>
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
