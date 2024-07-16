import React from "react"
import css from "./HomeIntro.module.css"

const HomeIntro = () => {
  return (
    <div className={css.homeIntroContainer}>
      <img className={css.mainImage} src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className={css.contentDiv}>
      <div className={css.smallDiv}>New Collection</div>
      <div className={css.topHeadingDiv}>
      <div className={css.topHeading}>Introducing New</div>
      <div className={css.topHeading}>Arrivals</div>
      </div>
      <div className={css.infoParaDiv}>
      <p className={css.infoPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, </p>
      <p className={css.infoPara}>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <button className={css.collectionBtn}>View Collection</button>
      </div>
    </div>
  )
}

export default HomeIntro
