import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import cart from '../../public/cart.png';

const Product = ({ name, image, objectId }) => {
  let [itemsInCart, setItemsInCart] = useState([]);

  localStorage.setItem('itemsInCart', itemsInCart);

  const addItemToCart = (e) => {
    let currentItem = e.target.parentNode;

    if (currentItem.nodeName === 'BUTTON') {
      currentItem = currentItem.parentNode;
    }
    console.log(currentItem);
    console.log(itemsInCart);
    setItemsInCart(itemsInCart.push(currentItem));
  };

  return (
    <div id={objectId} className={styles.singleProduct}>
      <img className={styles.productImage} src={image}></img>
      <h3 className={styles.productHeading}>{name}</h3>
      <button
        className={styles.productCartImage}
        onClick={(e) => setItemsInCart(e)}
      >
        <img src={cart} alt="cart"></img>
      </button>
    </div>
  );
};

export default Product;
