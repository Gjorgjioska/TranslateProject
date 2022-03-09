import React from "react";
import LanguageContex from "../contexts/LanguageContex";

class Button extends React.Component {
  static contextType = LanguageContex;
  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className=" ui button primary">{text}</button>;
  }
}

export default Button;
