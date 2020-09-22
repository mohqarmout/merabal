import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import PropTypes from "prop-types";

import logoImageLight from "assets/merabalv2.png";
import logoImageDark from "assets/merabalv1.png";
import styles from "./navbar.module.css";
import SlideMenu from "../SlideMenu";

class Navbar extends Component {
  state = {
    transparent: "",
    initialStatus: "",
    prevScrollpos: window.pageYOffset,
    visible: true,
    showMenu: false,
    showLogo: true,
    overlay: false
  };

  componentDidMount() {
    const { transparent } = this.props;
    this.setState({ transparent, initialStatus: transparent });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { initialStatus, prevScrollpos } = this.state;
    let { visible } = this.state;
    const currentScrollPos = window.pageYOffset; // t returns the number of pixels the document is currently scrolled along the vertical axis
    const windowHeight = document.documentElement.clientHeight; // the root height of pixel html ==> window height
    const navbarHeight = 80;
    // let visible = true;

    if (initialStatus) {
      if (currentScrollPos > windowHeight * 0.7 - navbarHeight) {
        visible = prevScrollpos > currentScrollPos; // to hide the nav on scroll up
        this.setState({ transparent: false });
      } else {
        this.setState({ transparent: true });
      }
    } else {
      visible = prevScrollpos > currentScrollPos;
    }
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  getTransparentClass = () => {
    const { transparent } = this.state;
    return transparent ? ` ${styles.transparent}` : "";
  };

  getNavbarClass = () => {
    //  return the nav class name
    const { initialStatus, transparent, visible } = this.state;
    let className = styles.navbar;
    className += !transparent ? ` ${styles.light}` : "";
    className += initialStatus ? ` ${styles.fixed}` : ` ${styles.sticky}`;
    className += !visible ? ` ${styles.hidden}` : "";
    return className;
  };

  showHideMenu = () => {
    const { showMenu, showLogo, overlay } = this.state;
    this.setState({
      showMenu: !showMenu,
      showLogo: !showLogo,
      overlay: !overlay
    });
  };

  getLogoClass = showLogo => (!showLogo ? ` ${styles.hide__logo}` : ""); // use it

  render() {
    const {
      initialStatus,
      transparent,
      visible,
      showMenu,
      showLogo,
      overlay
    } = this.state;
    return (
      <div className={overlay ? ` ${styles.overlay}` : ""}>
        <nav
          className={this.getNavbarClass(initialStatus, transparent, visible)}
        >
          <div className={`${styles.container} container`}>
            <div
              className={`${styles["image-container"]} ${this.getLogoClass(
                showLogo
              )}`}
            >
              <Link to="/">
                <img
                  className={styles.logo}
                  src={transparent ? logoImageLight : logoImageDark}
                  alt="logo"
                />
              </Link>
            </div>
            <div className={styles.nav__list}>
              <button
                type="button"
                className={styles.menu__icon}
                onClick={this.showHideMenu}
              >
                <svg
                  fill={transparent ? "#ffffff" : "#000000"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg>
              </button>
              {showMenu ? (
                <SlideMenu showHideMenu={this.showHideMenu} />
              ) : (
                <div className={styles.menu}>
                  <ul className={styles.list}>
                    <li className={styles["list--item"]}>
                      <NavLink
                        exact
                        smooth
                        className={`${
                          styles["list--link"]
                        } ${this.getTransparentClass()}`}
                        activeClassName={
                          transparent
                            ? styles["transparent--active"]
                            : styles.active
                        }
                        to="/#Report-scame"
                        isActive={(match, { hash }) =>
                          !!(match && match.isExact && hash)
                        }
                      >
                        Report Scame
                      </NavLink>
                    </li>
                    <li className={styles["list--item"]}>
                      <NavLink
                        exact
                        className={`${
                          styles["list--link"]
                        } ${this.getTransparentClass()}`}
                        activeClassName={
                          transparent
                            ? styles["transparent--active"]
                            : styles.active
                        }
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className={styles["list--item"]}>
                      <NavLink
                        exact
                        className={`${
                          styles["list--link"]
                        } ${this.getTransparentClass()}`}
                        activeClassName={
                          transparent
                            ? styles["transparent--active"]
                            : styles.active
                        }
                        to="/get-victim"
                      >
                        View Cases
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  transparent: PropTypes.bool
};

Navbar.defaultProps = {
  transparent: false
};

export default Navbar;
