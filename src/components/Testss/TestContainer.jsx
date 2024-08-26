import React from "react";
import styles from "./TestContainer.module.css";
import TestItem from "./TestItem";
import Data from "../../Data/Data";
const TestContainer = ({filter}) => {
  const filterData = filter === "All" ? Data : Data.filter((item) => item.category === filter);
  return (
    <div className={styles.container}>
      {filterData.map((item)=>(
        <TestItem key={item.id} name={item.name} img={item.img}/>
      ))}
      
    </div>
  );
};

export default TestContainer;
