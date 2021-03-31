import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

import { AccountContext } from "./Accounts";

const initialState = {
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const { getSession } = useContext(AccountContext);

  async function getMessage() {
    try {
      let options = {};
      options.method = "get";
      options.url = "http://localhost:5000/";

      // getSession().then(({ header }) => {
      //   // console.log(header);

      // });

      let session = await getSession();
      options.headers = {
        "Content-type": "application/json",
        Authorization: "Bearer " + session.header.Authorization,
      };

      // console.log(session.header.Authorization);

      // console.log(options.headers);

      let res = await axios(options);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        getMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
