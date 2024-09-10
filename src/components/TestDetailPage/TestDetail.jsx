import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TestDetail.module.css";
import { TestDetailData } from "../../Data/TestDetailData";
import Questionnaire from "../Questionare/Question";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);



const TestDetail = () => {
  const { name } = useParams();
  useGSAP(() => {
    const mm = gsap.matchMedia(); 
    
    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      gsap.from(`.${styles.firstSection}`, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
      });
  
      gsap.from(`.${styles.secondSection}`, {
        scrollTrigger: {
          trigger: `.${styles.secondSection}`,
          start: "top 90%",
          end: "top 0%",
          scrub: true,
        },
        opacity: 0,
        x: 500,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  
    mm.add("(max-width: 767px)", () => {
      // Mobile animations (simplify animations to reduce performance issues)
      gsap.from(`.${styles.firstSection}`, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power2.out",
      });
  
      gsap.from(`.${styles.secondSection}`, {
        scrollTrigger: {
          trigger: `.${styles.secondSection}`,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
        opacity: 0,
        x: 300,
        duration: 0.5,
        ease: "power2.out",
      });
  
     
    });
  }, []);
  const test = TestDetailData[name];
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  if (!test) {
    return (
      <>
        <h2>Test not found</h2>
        {console.log(name)}
      </>
    );
  }
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []); // E
  
  const handleStartClick = () => {
    setShowQuestionnaire(true);
    // Animate button click with GSAP
    gsap.to("button", {
      scale: 1.1,
      duration: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div className={styles.container}>
      {!showQuestionnaire ? (
        <>
          <div className={styles.firstSection}>
            <div className={styles.leftContent}>
              <h1>{test.name}</h1>
              <p>{test.about}</p>
              <button type="button" onClick={handleStartClick}>
                Get Started
              </button>
            </div>
            <div className={styles.rightContent}>
              <img src={test.img} alt="" />
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.secondLeft}>
              <h1>You are not alone</h1>
              <p>{test.discription}</p>
            </div>
            <div className={styles.secondRight}>
              <h1>{test.sufferNumber}</h1>
              <p>{test.sufferAbout}</p>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <h1>
              <span className={styles.span1}>Right</span>
              <span className={styles.span2}>Trigs</span> is confidential,
              convenient, and affordable
            </h1>
            <div className={styles.comments}>
              {test.reviews.map((item, index) => (
                <div key={index} className={styles.one}>
                  <div className={styles.top}>
                    <div className={styles.img}>
                      <img src={item.img} alt={`${test.name} image`} />
                    </div>
                    <div className={styles.top_content}>
                      <h1>{item.name}</h1>
                      <p>{item.date}</p>
                    </div>
                  </div>
                  <div className={styles.bottom}>{item.review}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Questionnaire disorder={name} />
      )}
    </div>
  );
};

export default TestDetail;
