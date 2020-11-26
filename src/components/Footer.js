import React from "react";

import logo from "../img/logo-with-text.png";

const currentYear = new Date().getFullYear();

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img src={logo} alt="MARDi logo" />
        </div>
        <div className="content has-text-centered">
          <div className="container" style={{ paddingBottom: 10 }}>
            Copyright © MARDi 2019 - {currentYear}. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
