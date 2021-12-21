import React from "react";
import "./ImageInput.css";

const ImageInput = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      <h2>{"Upload a picture to detect your face"}</h2>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white br3"
            onClick={onBtnSubmit}
            style={{ backgroundColor: "#D3C2D6" }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
