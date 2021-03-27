import React, { createContext, useReducer } from "react";
import axios from "axios";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  async function getMessage() {
    try {
      let res = await "http://localhost:5001/";
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
