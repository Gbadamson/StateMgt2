import { Button } from "antd";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const FeedBack = () => {
  const { msg, greetings, std, auth } = useContext(GlobalContext);
  return (
    <div>
      <center>This is Ola's feedback page</center>

      {auth ? (
        <center>
          {std.map(({ id, name }) => (
            <div key="id">{name}</div>
          ))}
        </center>
      ) : (
        <center
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "70px",
            }}
          >
            <input type="text" placeholder="example@email.com" />
            <input type="password" placeholder="password" />
            <Button>Login</Button>
          </form>
        </center>
      )}
    </div>
  );
};

export default FeedBack;
