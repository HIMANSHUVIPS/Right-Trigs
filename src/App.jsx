import React from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.webp";
import img from "./assets/pexels-maksgelatin-4348589.jpg";
import NavBar from "./components/navbar/NavBar";
import Heading from "./components/Heading/Heading";
const App = () => {
  return (
    <div className={styles.container}>
      <NavBar logo={logo}/>
      <Heading img={img}/>
    </div>
  );
};

export default App;
