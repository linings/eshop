import React from 'react';
import styles from './index.module.css';
import { useSelector } from 'react-redux';

const Orders = () => {
  const cart = useSelector((state) => state.isCartFullReducer);

  let sumPrices = cart.reduce((acc, value) => {
    acc += +value[0];
    return acc;
  }, 0);

  sumPrices = sumPrices.toFixed(2);
  sumPrices = sumPrices.toString() + ' BGN';

  let itemsNames = cart.reduce((acc, value) => {
    acc += '- ' + value[1] + '\n';
    return acc;
  }, '');

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  return (
    <div className={styles.ordersWrapper}>
      <div className={styles.myOrders}>My Orders</div>
      <div className={styles.listOfOrders}>
        <div className={styles.id}>
          {cart.length !== 0 ? 'Order # ' + getRandomInt(1000, 6001) : null}
        </div>
        <div className={styles['cart-product-name']}>{itemsNames}</div>
        <div className={styles['cart-product-price']}>{sumPrices}</div>
        <div className={styles.payment}>
          {cart.length !== 0 ? 'Payment' : null}
        </div>
      </div>
    </div>
  );
};

export default Orders;
