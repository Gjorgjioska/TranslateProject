import React from "react";
import LanguageContex from "../contexts/LanguageContex";

class Field extends React.Component {
  static contextType = LanguageContex;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
