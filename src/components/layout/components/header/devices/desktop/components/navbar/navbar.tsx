import { Link } from 'react-router-dom';

import { NAVBAR_ITEMS } from '../../../../constants';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        {NAVBAR_ITEMS.map((link) => (
          <li key={link.id}>
            <Link to={link.href} className={styles.navLink}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
