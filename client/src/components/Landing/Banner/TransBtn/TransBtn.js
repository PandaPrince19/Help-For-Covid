import React from "react";

// Styles
import "./TransBtn.css";

const TransBtn = ({ text, onClick }) => {
  return (
    <div className="transBtn" onClick={onClick}>
      {text}
    </div>
  );
};

export default TransBtn;
