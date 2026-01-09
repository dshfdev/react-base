import { useState } from 'react';

import { BurgerIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';

import { Logo } from '../../../logo';
import { PhoneCallButton } from '../../../phone-call-button';
import { BurgerMenu } from './components/burger-menu';

import styles from './header-mobile.module.scss';

export const HeaderMobile = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuOpen = () => setIsBurgerMenuOpen(true);
  const handleBurgerMenuClose = () => setIsBurgerMenuOpen(false);

  return (
    <div className={styles.headerMobile}>
      <Logo />
      <div className={styles.headerButtons}>
        <PhoneCallButton />
        <IconButton onClick={handleBurgerMenuOpen}>
          <BurgerIcon />
        </IconButton>
      </div>
      {isBurgerMenuOpen && <BurgerMenu isOpen={isBurgerMenuOpen} onClose={handleBurgerMenuClose} />}
    </div>
  );
};
