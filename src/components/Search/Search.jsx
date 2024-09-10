import React, { useState,useEffect } from "react";
import styles from "./Search.module.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const Search = ({ handleFilterClick}) => {
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#links', {
      opacity: 0,
      x: 120,
      scale: 0.8,
      rotation: 10, 
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2, 
      scrollTrigger: {
        trigger: '#links',
        markers: true, 
        scrub: true,
        start: 'top 85%', 
        end: 'top 50%', 
        toggleActions: "play none none reverse", 
      }
    });
  })
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
          id="links"
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
