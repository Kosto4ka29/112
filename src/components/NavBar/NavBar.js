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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/favorite">Favorite</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
