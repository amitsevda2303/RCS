import React from 'react'
import HomeIntro from '../../Components/HomeComponents/Intro/HomeIntro'
import HomeSlide from '../../Components/HomeComponents/slides/HomeSlide'
import Discount from '../../Components/HomeComponents/discount/Discount'
import Product from '../../Components/HomeComponents/product/Product'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <HomeIntro/>
      <HomeSlide/>
      <Discount/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Home
