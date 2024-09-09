import React, { useState } from "react";
import styles from "./NavBar.module.css";
import menu from "../../assets/customers/menu.png"; // Replace with the correct path for the menu icon
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const NavBar = ({ logo }) => {
  useGSAP(() => {
    gsap.to("#my_imggg", {
      x: 1200,
      duration: 2,
      delay: 1,
    });
  });

  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav>
      <div className={`${styles.logo} ${navbar ? styles.remove : ""}`}>
        <div className={styles.img}>
          <img src={logo} alt="logo" id="my_imggg" />
        </div>
        <div className={`${styles.logo_name}`}>
          <h1>RIGHT TRIGS</h1>
          <h3>MENTAL HEALTH</h3>
        </div>
      </div>

      <div
        className={`${styles.nav_content} ${navbar ? styles.mobile_view : ""}`}
      >
        <ul className={styles.nav_list}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Get Your Personalised Video Now!</li>
        </ul>
      </div>
      <img
        src={menu}
        alt="menu"
        className={styles.menu_btn}
        onClick={handleNavbar}
      />
    </nav>
  );
};

export default NavBar;
