import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TestDetail.module.css";
import { TestDetailData } from "../../Data/TestDetailData";
import img from "../../assets/img_1.jpg";

const TestDetail = () => {
  const { name } = useParams();
  const test = TestDetailData[name];
  if (!test) {
    return (
      <>
        <h2>Test not found</h2>
        {console.log(name)}
      </>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.leftContent}>
          <h1>{test.name}</h1>
          <p>{test.about}</p>
          <button type="button">Get Started</button>
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
          <span className={styles.span1}>Right</span><span className={styles.span2}>Trigs</span> is confidential, convenient, and affordable
        </h1>
        <div className={styles.comments}>
          <div className={styles.one}>
            <div className={styles.top}>
              <div className={styles.img}>
                <img src={img} alt="" />
              </div>
              <div className={styles.top_content}>
                <h1>Himashu</h1>
                <p>23 Aug,2022</p>
              </div>
            </div>
            <div className={styles.bottom}>
              I’m so grateful for <span>@righttrigs</span>. Really did change the whole idea
              of therapy for me. ❤️
            </div>
          </div>
          <div className={styles.one}>
            <div className={styles.top}>
              <div className={styles.img}>
                <img src={img} alt="" />
              </div>
              <div className={styles.top_content}>
                <h1>Himashu</h1>
                <p>23 Aug,2022</p>
              </div>
            </div>
            <div className={styles.bottom}>
              I’m so grateful for <span>@righttrigs</span>. Really did change the whole idea
              of therapy for me. ❤️
            </div>
          </div>
          <div className={styles.one}>
            <div className={styles.top}>
              <div className={styles.img}>
                <img src={img} alt="" />
              </div>
              <div className={styles.top_content}>
                <h1>Himashu</h1>
                <p>23 Aug,2022</p>
              </div>
            </div>
            <div className={styles.bottom}>
              I’m so grateful for <span>@righttrigs</span>. Really did change the whole idea
              of therapy for me. ❤️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
