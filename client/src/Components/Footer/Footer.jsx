import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={css.footerContainer}>
        <div className={css.logoDiv}>
          <h1>RCS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={css.linkDiv}>
          <div className={css.name}>SHOP</div>
          <div className={css.links}>
            <a href="/">Mountain Bike</a>
            <a href="/">Gravel Bike</a>
            <a href="/">Road Bike</a>
            <a href="/">Electirc Bike</a>
            <a href="/">Race Bike</a>
          </div>
        </div>
        <div className={css.linkDiv}>
          <div className={css.name}>Latest Accessories</div>
          <div className={css.links}>
            <a href="/">Bicycle helmet</a>
            <a href="/">Bottle</a>
            <a href="/">Light</a>
            <a href="/">Bike locks</a>
            <a href="/">Bag</a>
          </div>
        </div>
        <div className={css.linkDiv}>
          <div className={css.name}>Popular Brands</div>
          <div className={css.links}>
            <a href="/">Hero</a>
            <a href="/">Binachi</a>
            <a href="/">Merida</a>
            <a href="/">Canyon</a>
            <a href="/">Kross Bikes</a>
          </div>
        </div>
        <div className={css.linkDiv}>
          <div className={css.name}>Quick Links</div>
          <div className={css.links}>
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
      <div className={css.lastContainer}>
        <div className={css.copyrighDiv}>Copyright © 2024 RCS Offical</div>

        <div className={css.socialLinks}>
          <a href="/"><i class="fa-brands fa-instagram"></i></a>
          <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="/"><i class="fa-brands fa-facebook"></i></a>
          <a href="/"><i class="fa-brands fa-youtube"></i></a>
        </div>

        <div className={css.copyrighDiv}>
        Powered by Brandstore Pro
        </div>
      </div>
    </>
  );
};

export default Footer;
