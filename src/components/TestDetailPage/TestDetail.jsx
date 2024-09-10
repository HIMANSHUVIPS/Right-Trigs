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
    useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from(`.${styles.firstSection}`, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(`.${styles.secondSection}`, {
      scrollTrigger: {
        trigger: `.${styles.secondSection}`,
        start: "top 100%",
        end: "top 0%",
        scrub: true,
      },
      opacity: 0,
      x: 500,
      duration: 2,
      ease: "power2.out",
    });

    gsap.from(`.${styles.comments} `, {
      opacity: 0,
      x: 300, 
      scale: 0.8,
      stagger: 3, 
      duration: 2,
      delay:1, 
      ease: "expo.out", 
      scrollTrigger: {
        trigger: `.${styles.comments}`,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        toggleActions: "play none none reverse",
      }
    });

  }, []);

  const { name } = useParams();
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
