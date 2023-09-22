import React from "react";
import "./ButtomSheet.css";

const ButtomSheet = ({ height, close }) => {
  return (
    // data which is seen on the different screens
    <div className="new-sheet" style={{ height: `${height}px` }}>
      <div className="new-sheet-1"></div>
      <div className="new-sheet-content">
        <h1>React sheet</h1>
        <h4>
          Built using React.js and various libraries like react-spring and
          react-use-gesture. It follows best practices to minimize re-renders
          and only animates CSS properties that can be GPU-accelerated when
          possible.
        </h4>
        <p>
          This component can function as a modal dialog that requires user
          interaction before it can be closed, or as a floating bottom panel. It
          dynamically adjusts to fit the dimensions of its content.
        </p>
      </div>
      {/* sheet close */}
      {height !== null && (
        <button className="close-button" onClick={close}>
          X
        </button>
      )}
    </div>
  );
};

export default ButtomSheet;
