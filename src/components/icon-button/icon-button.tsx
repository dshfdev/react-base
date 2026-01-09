import React, { type ButtonHTMLAttributes } from 'react';

import styles from './icon-button.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  href?: string;
  additionalClassname?: string;
}

export const IconButton = ({
  children,
  onClick,
  href,
  additionalClassname,
  ...rest
}: IconButtonProps) => {
  const createClassname = () => {
    const baseClass = `${styles.iconButton}`;

    return additionalClassname ? `${baseClass} ${additionalClassname}` : baseClass;
  };

  if (href) {
    return (
      <a href={href} className={createClassname()} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={createClassname()} {...rest}>
      {children}
    </button>
  );
};
