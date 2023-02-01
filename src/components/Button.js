import React from "react";
import "./Button.css";

  const Button = ({ text, onClick, variant = "stroke" }) => {
    return (
      <button className={`hero-button ${variant}`} onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button;
