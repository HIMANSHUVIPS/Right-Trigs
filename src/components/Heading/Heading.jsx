import React from 'react'
import styles from "./Heading.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Heading = ({img}) => {
  return (
    <div className={styles.container}>
       <div className={styles.img}>
        <img src={img} alt="mainImg"/>
        <div className={styles.text}>
        <h1>Take a free mental health test</h1>
        <p>Our short online mental health screening tests will help you determine if you should seek help from a licensed mental health professional to address mental health issues.</p>
        <FontAwesomeIcon icon={faChevronDown} className={styles.downArrow}/>
       </div>
       </div>
       
    </div>
  )
}

export default Heading