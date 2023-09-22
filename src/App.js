// App.js
import React, { useState } from "react";
import "./App.css";
import "./components/ButtomSheet.css";
import ButtomSheet from "./components/ButtomSheet";

const App = () => {
  const [data, setData] = useState(null);

  const openSheetFull = () => {
    setData(570);
  };
  const openSheetHalf = () => {
    setData(250);
  };
  const openSheetSmall = () => {
    setData(150);
  };
  const close = () => {
    setData(null);
  };
  const handleClose = () => {
    setData(null);
  };
  return (
    <>
      <div className="screen">
        {/* Close the sheet */}
        <div
          id="new-basic-menu"
          data={data}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
        >
          <div
            className="new-card-details d-flex justify-content-center align-items-center"
            style={{ width: "15rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close new-small-close"
              onClick={handleClose}
              style={{
                position: "absolute",
                fontSize: 23,
                cursor: "pointer"
              }}
            ></i>
          </div>
        </div>
        <div className="screen">
          <h1 className="heading"> React Spring Bottom Sheet </h1>
          {/* Small screen */}
          <button
            onClick={openSheetSmall}
            style={{
              gap: "10px",
              marginRight: "20px",
              padding: "10px",
              fontSize: "20px",
              marginBottom: "7px"
            }}
          >
            Open Small Screen Sheet
          </button>
          {/* Medium screen button */}
          <button
            onClick={openSheetHalf}
            style={{
              gap: "10px",
              marginRight: "20px",
              padding: "10px",
              fontSize: "20px",
              marginBottom: "7px"
            }}
          >
            Open Half Screen Sheet
          </button>
          {/* Full screen button */}
          <button
            onClick={openSheetFull}
            style={{
              gap: "10px",
              marginRight: "20px",
              padding: "10px",
              fontSize: "20px",
              marginBottom: "7px"
            }}
          >
            {" "}
            Open Full Screen Sheet
          </button>
        </div>

        {data !== null && <ButtomSheet height={data} close={close} />}
      </div>
    </>
  );
};

export default App;
