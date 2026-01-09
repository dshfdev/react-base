import { useState } from 'react';

import { BurgerIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { useScrollLock } from '@/hooks';

import { Logo } from '../../../logo';
import { PhoneCallButton } from '../../../phone-call-button';
import { BurgerMenu } from './components/burger-menu';

import styles from './header-mobile.module.scss';

export const HeaderMobile = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleBurgerMenuOpen = () => {
    setIsBurgerMenuOpen(true);
    lockScroll();
  };
  const handleBurgerMenuClose = () => {
    setIsBurgerMenuOpen(false);
    unlockScroll();
  };

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
