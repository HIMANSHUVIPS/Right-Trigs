import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Data from "../../Data/Data";
import styles from "./TestItem.module.css";
const TestItem = () => {
  return (
    <>
    {Data.map(({name,img,id})=>(
         <div className={styles.item} key={id}>
         <img src={img} alt="Anxiety" />
         <h1>{name}</h1>
         <div className={styles.extraTest}>
           Start Test
           <FontAwesomeIcon icon={faAngleRight} className={styles.rightAngle} />
         </div>
       </div>
    ))};
    </>
  );
};

export default TestItem;
