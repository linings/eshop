import React from 'react';
import styles from './index.module.css';

const Orders = () => {
  let listOfOrders = localStorage.getItem('itemsInCart');
  console.log(listOfOrders);
  return (
    <div className={styles.ordersWrapper}>
      <div className={styles.myOrders}>My Orders</div>
      <div className={styles.listOfOrders}>{listOfOrders}</div>
    </div>
  );
};

export default Orders;
