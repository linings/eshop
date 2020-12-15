import React, { useEffect, useState } from 'react';
import getAllProducts from '../article/getAllComments';
import Product from '../product';
import style from './index.module.css';
import Spinner from 'react-bootstrap/Spinner';

const HomePage = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  const renderProducts = () => {
    return products.map((product) => {
      return <Product key={product.objectId} {...product} />;
    });
  };

  useEffect(() => {
    (async () => {
      let result = await getAllProducts();

      if (result) {
        setLoading(false);
      }

      setProducts(result);
    })();
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  return <div className={style.content}>{renderProducts()}</div>;
};

export default HomePage;
