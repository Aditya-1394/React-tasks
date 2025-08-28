 import React, { useState } from "react";

class ColorToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlue: true, 
    };
  }

  toggleColor = () => {
    this.setState((prevState) => ({
      isBlue: !prevState.isBlue,
    }));
  };

  render() {
    const { isBlue } = this.state;

    const buttonStyle = {
      backgroundColor: isBlue ? "blue" : "green",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    };

    return (
      <button style={buttonStyle} onClick={this.toggleColor}>
        {isBlue ? "Blue Button" : "Green Button"}
      </button>
    );
  }
}

export default ColorToggleButton;
