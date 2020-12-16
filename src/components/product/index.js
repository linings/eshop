import React from 'react';
import styles from './index.module.css';
import { increment } from '../../actions';
import { addItemToCart } from '../../actions';
import cart from '../../public/cart.png';
import { useDispatch } from 'react-redux';

const Product = ({ name, image, objectId, price }) => {
  const dispatch = useDispatch();

  const addItem = (e) => {
    let currentItem = e.target.parentNode;

    if (currentItem.nodeName === 'BUTTON') {
      currentItem = currentItem.parentNode;
    }
    dispatch(increment());

    let productForCart = productForCartUsage(currentItem);

    dispatch(addItemToCart(productForCart));
  };

  const productForCartUsage = (currentItem) => {
    let product = Array.from(currentItem.children);
    let productDetails = [];
    productDetails.push(product[0].alt);
    productDetails.push(product[1].innerText);

    console.log(productDetails);
    return productDetails;
  };

  return (
    <div id={objectId} className={styles.singleProduct}>
      <img alt={price} className={styles.productImage} src={image}></img>
      <h3 className={styles.productHeading}>{name}</h3>
      <button
        className={styles.productCartImage}
        onClick={(e) => addItem(e)}
      >
        <img src={cart} alt="cart"></img>
      </button>
    </div>
  );
};

export default Product;
