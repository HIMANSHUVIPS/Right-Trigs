import React, { useState } from "react";
import styles from "./NavBar.module.css";
import menu from "../../assets/customers/menu.png"; // Replace with the correct path for the menu icon
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const NavBar = ({ logo }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#my_imggg", {
      x: -100,
      duration: 2,
      delay: 1,
      opacity: 0,
      scale: 0.8,
      rotate: 360,
      ease: "elastic.out(1, 0.5)", 
    });

    tl.from("#company_name", {
      duration: 1.5,
      delay: -1.5,
      opacity: 0,
      skewX: 10,
      ease: "back.out(1.7)",
    });

    tl.from("#company_work", {
      duration: 1.5,
      delay: -1.3,
      opacity: 0,
      x: -50,
      rotateY: 90,
      ease: "power3.out",
    });

    tl.from("#menu_btn", {
      duration: 1.5,
      delay: -1.2,
      opacity: 0,
      scale: 0,
      ease: "back.out(1.7)",
    });

    tl.from('li', {
      duration: 0.8,
      opacity: 0,
      x: 100,
      skewY: 10,
      stagger: 0.2,
      ease: "power2.out",
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
          <h1 id="company_name">RIGHT TRIGS</h1>
          <h3 id="company_work">MENTAL HEALTH</h3>
        </div>
      </div>

      <div
        className={`${styles.nav_content} ${navbar ? styles.mobile_view : ""}`}
      >
        <ul className={styles.nav_list} id="nav_list">
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
        id="menu_btn"
      />
    </nav>
  );
};

export default NavBar;
