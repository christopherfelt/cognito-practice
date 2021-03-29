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
      getSession().then(({ header }) => {
        console.log(header);
      });
      let res = await axios.get("http://localhost:5000/");
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
