import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
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
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/who-we-help">
                Who we help
              </Link>
              <Link className="navbar-item" to="/refugee-crisis">
                Refugee crisis
              </Link>
              <Link className="navbar-item" to="/volunteer">
                Volunteer
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/faq">
                FAQ
              </Link>
            </div>
            <div
              className="navbar-end has-text-centered"
              style={{ display: "flex" }}
            >
              <a
                className="navbar-item"
                title="facebook"
                href="https://www.facebook.com/groups/639221036512761"
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
                href="https://www.instagram.com/mardi.france"
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
