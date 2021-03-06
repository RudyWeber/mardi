import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.jpeg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="MARDi logo" style={{ height: "90px" }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                ABOUT
              </Link>
              <Link className="navbar-item" to="/what-we-do">
                WHAT WE DO
              </Link>
              <Link className="navbar-item" to="/refugee-crisis">
                PARIS REFUGEE CRISIS
              </Link>
              <Link className="navbar-item" to="/situation-updates">
                SITUATION UPDATES
              </Link>
              <Link className="navbar-item" to="/get-involved">
                GET INVOLVED
              </Link>
              <Link className="navbar-item" to="/faq">
                FAQs
              </Link>
              <Link className="navbar-item" to="/contact-us">
                CONTACT US
              </Link>
            </div>
            <div
              className="navbar-end has-text-centered"
              style={{ display: "flex" }}
            >
              <a
                className="navbar-item"
                title="facebook"
                href="https://www.facebook.com/MARDi.france2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
              </a>
              <a
                className="navbar-item"
                title="instagram"
                href="https://www.instagram.com/mardi.france2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
