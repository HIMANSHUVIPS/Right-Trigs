import React, { useState } from "react";
import styles from "./Search.module.css";
const Search = ({ handleFilterClick}) => {
  const items = ["All", "Health", "IQ", "Career", "Relationships"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index, item) => {
    setActiveIndex(index);
    handleFilterClick(item);
  };

  return (
    <div className={styles.links}>
      {items.map((item, index) => (
        <a
          key={index}
          onClick={() => handleClick(index, item)}
          className={index === activeIndex ? styles.active : ""}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Search;
