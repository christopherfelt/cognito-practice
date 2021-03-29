import React, { useState, useContext } from "react";
import UserPool from "./UserPool";

import "./App.css";

import { Account, AccountContext } from "./components/Accounts";
import Signup from "./components/signup";
import Login from "./components/login";
import Status from "./components/Status";
import GetARequest from "./components/GetARequest";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   UserPool.signUp(email, password, [], null, (err, data) => {
  //     if (err) console.error(err);
  //     console.log(data);
  //   });
  // };

  return (
    <Account>
      <GlobalProvider>
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
          <GetARequest />
        </div>
      </GlobalProvider>
    </Account>
  );
}

export default App;
