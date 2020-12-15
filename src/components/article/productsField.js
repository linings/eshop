import React from 'react';

import styles from './index.module.css';
import saveItemInDatabase from '../saveImageinDatabase';

const inputsField = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let price = e.target.price.value;
    let image = e.target.image.value;

    saveItemInDatabase({
      name,
      price,
      image,
    });

    e.target.name.value = '';
    e.target.price.value = '';
    e.target.image.value = '';
  };

  return (
    <form className={styles.inputField} onSubmit={handleSubmit}>
      <div className={styles.heading}>New Product</div>
      <input
        type="text"
        className={styles.name}
        name="name"
        placeholder="Product name"
      ></input>
      <input
        className={styles.price}
        type="text"
        name="price"
        placeholder="Price"
      ></input>
      <input
        className={styles.image}
        name="image"
        type="text"
        placeholder="Image Url"
      ></input>
      <button className={styles.btnSave}>Save</button>
    </form>
  );
};

export default inputsField;
