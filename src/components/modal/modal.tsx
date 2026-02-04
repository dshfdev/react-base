import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@/assets/icons';
import { useScrollLock, useWindowSize } from '@/hooks';

import styles from './modal.module.scss';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      return;
    }

    unlockScroll();

    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    onClose();
  };

  return createPortal(
    <div className={styles.modal} role="dialog" aria-modal="true">
      <div className={styles.backdrop} onClick={handleModalClose} />
      <div className={styles.content}>
        {children}
        <button className={styles.closeBtn} onClick={handleModalClose}>
          {isMobile ? <CloseIcon /> : 'Закрыть'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
