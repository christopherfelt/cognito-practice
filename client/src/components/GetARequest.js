import React, { useContext } from "react";
import { AccountContext } from "./Accounts";
import { GlobalContext } from "./GlobalState";

export default function GetARequest() {
  const { getSession } = useContext(AccountContext);
  const { getMessage } = useContext(GlobalContext);

  const clickHandler = (e) => {
    console.log("You click a thing");
    getMessage();

    // getSession().then(({ header }) => {
    //   console.log(header);
    // });
  };

  return (
    <div>
      <button onClick={clickHandler}>Make a Get Request</button>
    </div>
  );
}
