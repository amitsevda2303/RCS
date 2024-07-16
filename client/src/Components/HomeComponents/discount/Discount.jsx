import React from "react";
import css from "./Discount.module.css";
import discount from "../../../Assets/discount.png";
import cycle from "../../../Assets/cycle.svg";
const Discount = () => {
  return (
    <div className={css.disCountContainer}>
      <div className={css.topSection}>
        <div className={css.quoteicon}>
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <p className={css.quote}>
          “Life is like riding a bicycle.
          <br /> To keep your balance you must keep moving”{" "}
        </p>
        <div className={css.nameDiv}>
          <p>Albert Einstein </p>
        </div>
      </div>
      <div className={css.bottomSection}>
        <div className={css.designDiv}></div>
        <div className={css.offerDiv}>
          <div className={css.textDiv}>
            <img src={discount} style={{ width: "70px" }} alt="" />
            <div className={css.smallHeading}>Free Delivery</div>
            <div className={css.bigHeading}>On All orders above $500!</div>
            <p className={css.infoPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nam.
            </p>
            <button className={css.grabButton}>Grab This Offer</button>
          </div>
          <div className={css.cycleImgDiv}>
            <img className={css.cycleImage} src={cycle} alt="cycleImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
