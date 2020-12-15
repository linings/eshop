import React from 'react';

import styles from './index.module.css';
import logo from '../../public/logo1.jpg';
import LinkComponent from '../link';
import getNavigation from '../../utils/navigation'

const Header = () => {

  const links = getNavigation();

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
    </header>
  );
};

export default Header;
