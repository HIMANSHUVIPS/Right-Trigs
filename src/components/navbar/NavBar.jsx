import React from "react";
import styles from "./NavBar.module.css";
const NavBar = ({logo}) => {
  return (
    <nav>
      <div className={styles.logo}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.logo_name}>
          <h1>RIGHT TRIGS</h1>
          <h3>MENTAL HEALTH</h3>
        </div>
      </div>
      <div className={styles.nav_content}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Get Your Personalised Video Now!</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
