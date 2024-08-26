import React from "react";
import styles from "./TestContainer.module.css";
import TestItem from "./TestItem";
const TestContainer = () => {
  return (
    <div className={styles.container}>
      <TestItem/>
    </div>
  );
};

export default TestContainer;
