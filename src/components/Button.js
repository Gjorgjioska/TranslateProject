import React from "react";
import LanguageContex from "../contexts/LanguageContex";

class Button extends React.Component {
  static contextType = LanguageContex;
  render() {
    console.log(this.context);
    return <button className=" ui button primary">Submit</button>;
  }
}

export default Button;
