import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma5 mt0">
      <Tilt>
        <div
          className="br4 pa3 shadow-5 logo"
          style={{
            height: "150px",
            width: "150px",
          }}
        >
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
