import { CloseIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';

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
              <Link href={navbarItem.href} onClick={onClose} additionalClassname={styles.link}>
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
