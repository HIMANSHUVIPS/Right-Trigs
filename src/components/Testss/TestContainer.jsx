import React from "react";
import styles from "./TestContainer.module.css";
import TestItem from "./TestItem";
import Data from "../../Data/Data";
const TestContainer = ({filter}) => {
  const filterData = filter === "All" ? Data : Data.filter((item) => item.category === filter);
  return (
    <div className={styles.container}>
      {filterData.map(({id,name,img})=>(
        <TestItem key={id} name={name} img={img}/>
      ))}
      
    </div>
  );
};

export default TestContainer;
