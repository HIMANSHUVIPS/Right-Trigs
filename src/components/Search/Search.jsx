import React from "react";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className={styles.links}>
        <a href="#">All</a>
        <a href="#">Health</a>
        <a href="#">IQ</a>
        <a href="#">Career</a>
        <a href="#">Relationships</a>
    </div>
  );
};

export default Search;
