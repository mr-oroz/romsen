import React from 'react';

const ProductItem = (props) => {
  return (
    <div className='product-item'>
      <div className='product-item_img'>
        <img src={props.img} alt="" />
      </div>
      <h1 className="product-item_title">{props.title}</h1>
      <span className="product-item_description">1050 грамм, 30 кусочков</span>
      <div className="product-item_price-btn">
        <span>1500</span>
        <button>Хочу</button>
      </div>
    </div>
  );
};

export default ProductItem;