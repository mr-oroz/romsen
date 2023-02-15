import React from 'react';


const Product = (props) => {
  const { img } = props;
  return (
    <>
      {
        img && <div className='product'>
          <img src={img && img} alt="" />
          <p>Чикен</p>
        </div>
      }
    </>
  );
};

export default Product;