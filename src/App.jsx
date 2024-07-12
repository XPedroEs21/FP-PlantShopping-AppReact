
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import AboutUs from './AboutUs';
import Cart from './CartItem';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState (false);
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  const handleCart = () => {
    setShowCart(true);
  };
const handleProducts = () =>  {
    setShowCart(false);
};
  return (
    <Provider store={store}>
      <Router>
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
      {showCart ? (
        <Cart onContinueShopping={handleProducts} />
      ) : (
        <ProductList onGoToCart={handleCart}/>
      )}
      </div>
        </div>
        </Router>
    </Provider>
  );
}

export default App;



