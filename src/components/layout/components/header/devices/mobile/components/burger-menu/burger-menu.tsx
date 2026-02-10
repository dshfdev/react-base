import { Link } from 'react-router-dom';

import { CloseIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';

import { NAVBAR_ITEMS } from '../../../../constants';

import styles from './burger-menu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  return (
    <div className={styles.burgerMenu}>
      <nav role="menu" aria-hidden={!isOpen}>
        <ul className={styles.navbar}>
          {NAVBAR_ITEMS.map((navbarItem) => (
            <li key={navbarItem.id}>
              <Link to={navbarItem.href} onClick={onClose} className={styles.link}>
                {navbarItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton additionalClassname={styles.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
