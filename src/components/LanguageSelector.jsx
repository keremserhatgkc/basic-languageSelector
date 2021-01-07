import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  renderSubmit = language => {
    return language === "english" ? "Select a Language" : "Dili Seçiniz";
  };

  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
        :
        <i
          className='flag us'
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className='flag tr'
          onClick={() => this.context.onLanguageChange("turkish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
