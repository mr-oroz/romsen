// jsx syntax
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Slider from './components/slider/slider';
import Product from './components/product/product';
import Chicken from './assets/images/chicken.png';
import Dog from './assets/images/dog.png';
import Pizza from './assets/images/pizza.png';
import igrom from './assets/images/igrem.png';
import discount from './assets/images/discount.png';
import ProductItem from './components/product-item/product-item';
import swiper1 from './assets/images/swiper1.png'
import swiper2 from './assets/images/swiper2.png'
import swiper3 from './assets/images/swiper3.png'

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="left-panel">
            <Nav />
          </div>
          <div className="content">
            <Header />
            <div className="block">
              <Slider />
              <div className="products">
                <div className="item1">
                  <Product img={Chicken} />
                </div>
                <div className="item2">
                  <Product img={igrom} />
                </div>
                <div className="item3">                <Product width='224px' />
                  <Product img={Dog} />
                </div>
                <div className="item4">
                  <Product img={Pizza} />
                </div>
                <div className="item5">
                  <Product img={discount} />
                </div>
              </div>
              <div className="swiper">
                <ProductItem title="Саломон сет"  img={swiper1}/>
                <ProductItem title="Филадельфия и лосось сет" img={swiper2}/>
                <ProductItem title="Самая большая Филадельфия" img={swiper3}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;