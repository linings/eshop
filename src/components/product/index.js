import React from 'react';
import styles from './index.module.css';
import { increment } from '../../actions';
import cart from '../../public/cart.png';
import { useDispatch } from 'react-redux';

const Product = ({ name, image, objectId }) => {
  const dispatch = useDispatch();

  const addItemToCart = (e) => {
    let currentItem = e.target.parentNode;

    if (currentItem.nodeName === 'BUTTON') {
      currentItem = currentItem.parentNode;
    }
    dispatch(increment());
    console.log(currentItem.children);
  };

  return (
    <div id={objectId} className={styles.singleProduct}>
      <img className={styles.productImage} src={image}></img>
      <h3 className={styles.productHeading}>{name}</h3>
      <button
        className={styles.productCartImage}
        onClick={(e) => addItemToCart(e)}
      >
        <img src={cart} alt="cart"></img>
      </button>
    </div>
  );
};

export default Product;
