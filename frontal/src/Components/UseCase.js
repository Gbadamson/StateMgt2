import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const UseCase = () => {
  const value = useContext(GlobalContext);

  return (
    <div>
      <center>This is the Use case Page</center>
      <center>{value}</center>
    </div>
  );
};

export default UseCase;
