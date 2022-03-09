import React from "react";
import UserCreate from "./UserCreate";
import LanguageContex from "../contexts/LanguageContex";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContex.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContex.Provider>

        <UserCreate />
      </div>
    );
  }
}
export default App;
