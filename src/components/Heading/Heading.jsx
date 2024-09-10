import React, { useEffect } from 'react'
import styles from "./Heading.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Heading = ({img}) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#headingImg", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.out",
    });

    tl.from("#headText", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    }, "-=1.2");

    tl.from("#headInfo", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    }, "-=1");

    gsap.to("#downArrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });
  }, []);
  return (
    <div className={styles.container}>
       <div className={styles.img}>
        <img src={img} alt="mainImg" id='headingImg'/>
        <div className={styles.text}>
        <h1 id='headText'>Take a free mental health test</h1>
        <p id='headInfo'>Our short online mental health screening tests will help you determine if you should seek help from a licensed mental health professional to address mental health issues.</p>
        <FontAwesomeIcon icon={faChevronDown} className={styles.downArrow} id='downArrow'/>
       </div>
       </div>
       
    </div>
  )
}

export default Heading