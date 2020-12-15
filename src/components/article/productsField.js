import React from 'react';

import styles from './index.module.css'

const inputsField = () => {
  return (
    <div className={styles.inputField}>
      <div className={styles.heading}>New Product</div>
      <input type="text" className={styles.name} placeholder="Product name"></input>
      <input className={styles.price} type="text" placeholder="Price"></input>
      <input className={styles.image} type="text" placeholder="Image Url"></input>
      <button className={styles.btnSave}>Save</button>
    </div>
  );
};

export default inputsField;
