import React from 'react';

import styles from './index.module.css';
import logo from '../../public/logo1.jpg';
import LinkComponent from '../link';
import getNavigation from '../../utils/navigation';
import cart from '../../public/cart-grey.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const links = getNavigation();

  const counter = useSelector((state) => state.counterReducer);

  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="eSHOP.com"></img>
      <div className={styles['logo-heading']}>eShop.com</div>

      {links.map((navElement) => {
        return (
          <LinkComponent
            key={navElement.title}
            title={navElement.title}
            href={navElement.href}
            type="header"
          />
        );
      })}

      <img src={cart} alt="cart" className={styles.finalCart}></img>
      <div className={styles.numberOfItems}>{counter}</div>
    </header>
  );
};

export default Header;
