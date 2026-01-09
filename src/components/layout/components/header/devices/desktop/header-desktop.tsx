import { Logo } from '../../../logo';
import { PhoneCallButton } from '../../../phone-call-button';
import { Navbar } from './components/navbar';

import styles from './header-desktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <div className={styles.headerDesktop}>
      <Logo />
      <Navbar />
      <PhoneCallButton />
    </div>
  );
};
