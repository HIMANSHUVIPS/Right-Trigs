import React from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.webp";
import NavBar from "./components/navbar/NavBar";
const App = () => {
  return (
    <div className={styles.container}>
      <NavBar logo={logo}/>
    </div>
  );
};

export default App;
