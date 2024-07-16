import React from "react";
import css from "./Product.module.css";
import discount from "../../../Assets/discountlogo2.svg"
import order from "../../../Assets/order.svg"
import track from "../../../Assets/tracking.svg"

const Product = () => {
  return (
    <div className={css.productContainer}>
      <div>
        <h1>Featured Proucts</h1>
      </div>
      <div className={css.cardDiv}>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe5-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe2-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe4-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe3-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe5-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe2-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe4-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.redirectorDiv}>Quick View</div>
            <img
              src="https://websitedemos.net/store-04/wp-content/uploads/sites/157/2018/01/sports-shoe3-300x300.jpg"
              alt=""
            />
          </div>
          <div className={css.infoDiv}>
            <h5>Mountain Bike</h5>
            <div className={css.name}>Super Mario Magic G-35</div>
            <h6>⭐⭐⭐⭐⭐</h6>
            <div className={css.price}>200$</div>
          </div>
        </div>
      </div>
      <div className={css.threeBtns}>
        <button> <img src={order} alt="" />Express Delivery</button>
        <button><img src={track} alt="" /> Order Tracking</button>
        <button><img src={discount} alt="" /> Regular Discount</button>
      </div>
    </div>
  );
};

export default Product;
