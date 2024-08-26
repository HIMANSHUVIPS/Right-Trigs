import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./TestItem.module.css";
const TestItem = ({name,img}) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="Anxiety" />
      <h1>{name}</h1>
      <div className={styles.extraTest}>
        Start Test  
        <FontAwesomeIcon icon={faAngleRight} className={styles.rightAngle} />
      </div>
    </div>
  );
};

export default TestItem;
