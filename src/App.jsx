import React from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.webp";
import img from "./assets/pexels-maksgelatin-4348589.jpg";
import NavBar from "./components/navbar/NavBar";
import Heading from "./components/Heading/Heading";
import Search from "./components/Search/Search";
import TestContainer from "./components/Testss/TestContainer";
const App = () => {
  const handleFilterClick = (item) => {
    console.log(item);
  }
  return (
    <div className={styles.container}>
      <NavBar logo={logo}/>
      <Heading img={img}/>
      <Search handleFilterClick={handleFilterClick}/>
      <TestContainer/>
      <div className={styles.bottom}>

      </div>
    </div>
  );
};

export default App;
