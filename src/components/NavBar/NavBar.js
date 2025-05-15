import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <i className="fas fa-tasks" />
        </NavLink>
        <ul className={styles.menu}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Home</NavLink></li>
          <li><NavLink to="/favorite" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Favorite</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : undefined}>About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
