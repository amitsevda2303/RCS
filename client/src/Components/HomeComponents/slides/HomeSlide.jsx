import React from "react";
import css from "./HomeSlide.module.css";

const HomeSlide = () => {
  return (
    <div className={css.homeSlideContainer}>
      <div className={css.rightContainer}>
        <img
          src="https://ch.earlyrider.com/cdn/shop/files/B20-Profile-Sage-Green.jpg?v=1694506352"
          alt="img"
          className={css.rightContainerImg}
        />
        <div className={css.absoluteDiv}>
          <h1>Hybrid</h1>
        </div>
      </div>
      <div className={css.leftContainer}>

        <div className={css.leftTopDiv}>
          <div className={css.leftTopInnerDiv}>
            <img
              src="https://www.inside-mtb.de/wp-content/uploads/2017/02/01_Jeffsy27_CF_PRO_RACE_silver_front_b1-560x420.jpg"
              alt="cycleImg"
              className={css.leftTopInnerDivImg}
            />
            <div className={css.absoluteDiv}>
              <h1>ROAD</h1>
            </div>
          </div>
          <div className={css.leftTopInnerDiv}>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/21/2020/02/YT-and-NukeProof-kids-bikes-06-c66feca.jpg?quality=90&resize=900%2C600"
              alt="cycleImg"
              className={css.leftTopInnerDivImg}
            />
            <div className={css.absoluteDiv}>
              <h1>MTB</h1>
            </div>
          </div>
        </div>


        <div className={css.leftBottomDiv}>
          <img
            src="https://d3dbysmy5y25ht.cloudfront.net/product/dark-knight-ms-29-5T/blue-black/zoom/frame.jpg"
            alt="cycleImg"
            className={css.leftBottomDivImg}
          />
          <div className={css.absoluteDiv}>
            <h1>Gravel</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
