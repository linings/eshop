import React from 'react';
import styles from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../actions';

const Orders = () => {
  const counter = useSelector((state) => state.counterReducer);
  const cart = useSelector((state) => state.isCartFullReducer);
  const dispatch = useDispatch();

  const displayCartItems = (cart) => {
    return cart;
  };

  return (
    <div className={styles.ordersWrapper}>
      <div className={styles.myOrders}>My Orders</div>
      <div className={styles.listOfOrders}>
        CART:
        <div className={styles.itemInCart}>{cart}</div>
      </div>
    </div>
  );
};

export default Orders;
