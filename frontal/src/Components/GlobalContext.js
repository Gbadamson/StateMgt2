import React, { createContext, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";

const initalState = {
  member: [
    { id: 1, name: "Ola" },
    { id: 2, name: "Josh" },
    { id: 3, name: "Lekan" },
  ],
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [state, dispatch] = useReducer(AppReducer, initalState);

  return (
    <GlobalContext.Provider
      value={{
        msg: "Hello this is Olayinka",
        greetings: "Welcome to my homepage",
        std: state.member,
        auth,
        setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
