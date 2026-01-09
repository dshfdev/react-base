import React, { type AnchorHTMLAttributes } from 'react';

import styles from './link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  additionalClassname?: string;
}

export const Link = ({ href, children, additionalClassname, ...rest }: LinkProps) => {
  const createLinkClassname = () => {
    const baseClassname = `${styles.link}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <a href={href} className={createLinkClassname()} {...rest}>
      {children}
    </a>
  );
};
