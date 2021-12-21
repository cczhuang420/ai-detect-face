import React from "react";

const Navigation = ({ isSignin, onRouteChange }) => {
  if (isSignin) {
    return (
      <nav
        className="mr5"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link grow black underline pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="mr5"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          p
          onClick={() => onRouteChange("signin")}
          className="f3 link grow black underline pointer mr3"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link grow black underline pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
