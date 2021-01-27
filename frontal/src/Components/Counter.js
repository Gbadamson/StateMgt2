import React, { useState, useReducer } from "react";

const initState = {
  count: 10,
};
const AppRdeucer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        count: state.count - 1,
      };
    case "PUT":
      return {
        count: action.payload,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(AppRdeucer, initState);
  //dispatch is like the event you want to execute or carry out
  return (
    <div>
      <center style={{ marginTop: "70px" }}>
        <div>
          <div>{state.count}</div>
          <div>
            <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
            <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Counter;
