import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import logo from "./assets/logo.webp";
import img from "./assets/pexels-maksgelatin-4348589.jpg";
import NavBar from "./components/navbar/NavBar";
import Heading from "./components/Heading/Heading";
import Search from "./components/Search/Search";
import TestContainer from "./components/Testss/TestContainer";
import TestDetail from "./components/TestDetailPage/TestDetail";

const App = () => {
  const [filter, setFilter] = useState("All");

  const location = useLocation();

  const handleFilterClick = (item) => {
    setFilter(item);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <NavBar logo={logo} />

      {location.pathname === "/" && (
        <>
          <Heading img={img} />
          <Search handleFilterClick={handleFilterClick} />
        </>
      )}
     
      <Routes>
        <Route path="/" element={<TestContainer filter={filter} />}></Route>
        <Route path="/test/:name" element={<TestDetail />}></Route>
      </Routes>

      <div className={styles.bottom}></div>
    </div>
  );
};

export default App;
