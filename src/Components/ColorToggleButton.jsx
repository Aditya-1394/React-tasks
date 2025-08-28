 import React, { useState } from "react";

 const ColorToggleButton = () => {
  const [isBlue, setIsBlue] = useState(true);
  
  return (
    <button
      onClick={() => setIsBlue(!isBlue)}
      style={{
        backgroundColor: isBlue ? "blue" : "green",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px"
      }}
    >
      {isBlue ? "Blue Button" : "Green Button"}
    </button>
  );
 };
 export default ColorToggleButton;