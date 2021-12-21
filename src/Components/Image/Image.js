import React from "react";
import "./Image.css";

const Image = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute ma4">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Image;
