import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./TestItem.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TestItem = ({name,img}) => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []); //
  return (
    <Link to={`/test/${name}`} target="_blank" className={styles.item}>
      <img src={img} alt="Anxiety" />
      <h1>{name}</h1>
      <div className={styles.extraTest}>
        Start Test  
        <FontAwesomeIcon icon={faAngleRight} className={styles.rightAngle} />
      </div>
    </Link>
  );
};

export default TestItem;
