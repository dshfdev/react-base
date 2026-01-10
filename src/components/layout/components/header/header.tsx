import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks';

import { HeaderDesktop } from './devices/desktop/header-desktop';
import { HeaderMobile } from './devices/mobile/header-mobile';

import styles from './header.module.scss';

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <Container isWide>{width <= 1024 ? <HeaderMobile /> : <HeaderDesktop />}</Container>
    </header>
  );
};
