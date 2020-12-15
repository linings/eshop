import React from 'react';
import styles from './index.module.css';

const Orders = () => {
  let itemsInCart = localStorage.getItem('itemsInCart');
  console.log(itemsInCart);
  return (
    <div className={styles.ordersWrapper}>
      <div className={styles.myOrders}>My Orders</div>
      <div className={styles.listOfOrders}>{itemsInCart}</div>
    </div>
  );
};

export default Orders;
