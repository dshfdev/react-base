import { CloseIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';

import { NAVBAR_ITEMS } from '../../../../constants';

import styles from './burger-menu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu = ({ onClose }: BurgerMenuProps) => {
  return (
    <div className={styles.burgerMenu}>
      <IconButton additionalClassname={styles.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <nav>
        <ul className={styles.navbar}>
          {NAVBAR_ITEMS.map((link) => (
            <li key={link.id}>
              <Link href={link.href} onClick={onClose} additionalClassname={styles.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
