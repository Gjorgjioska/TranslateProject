import React from "react";
import LanguageContex from "../contexts/LanguageContex";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    return (
      <button className=" ui button primary">
        <LanguageContex.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContex.Consumer>
      </button>
    );
  }
}

export default Button;
