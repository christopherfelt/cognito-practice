import React, { useState } from "react";
import UserPool from "./UserPool";

import "./App.css";

import { Account } from "./components/Accounts";
import Signup from "./components/signup";
import Login from "./components/login";
import Status from "./components/Status";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = (e) => {
    console.log("You click a thing");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <Account>
      <div>
        <h2>AWS Cognito Authorization Practice</h2>
        <Status />
        <br />
        <Signup />
        <br />
        <br />
        <Login />
        <br />
        <br />
        <button onClick={clickHandler}>Make a Get Request</button>
      </div>
    </Account>
  );
}

export default App;
