import { NavLink } from 'react-router-dom';

import { Link } from '@/components/link';

import { NAVBAR_ITEMS } from '../../../../constants';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        {NAVBAR_ITEMS.map((link) => (
          <li key={link.id}>
            {link.isExternal ? (
              <NavLink to={link.href} className={styles.navLink}>
                {link.title}
              </NavLink>
            ) : (
              <Link href={link.href}>{link.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
