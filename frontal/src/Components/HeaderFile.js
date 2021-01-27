import React, { useContext } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const HeaderFile = () => {
  const { msg, greetings, std, auth, setAuth } = useContext(GlobalContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "70px",
          width: "100vw",
          backgroundColor: "purple",
          justifyContent: "space-evenly",
          color: "white",
          fontFamily: "cursive",
          fontSize: "15px",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <Link to="/">HomeDesign</Link>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Link to="/usecase">UseCase</Link>{" "}
        </div>
        <div style={{ cursor: "pointer" }}>
          <Link to="/feedback">FeedBack</Link>
        </div>
        {auth ? (
          <Button
            onClick={() => {
              setAuth(!auth);
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              setAuth(!auth);
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderFile;
