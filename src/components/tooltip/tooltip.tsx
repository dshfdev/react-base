import { type ReactNode, useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

export interface TooltipProps {
  text: string;
  icon?: ReactNode;
  additionalClassname?: string;
}

export const Tooltip = ({ text, icon, additionalClassname }: TooltipProps) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const createClassname = () => {
    const baseClassname = `${styles.tooltip}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  const handleMouseEnter = () => {
    setIsTextVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTextVisible(false);
  };

  return (
    <span
      className={createClassname()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.icon}>{icon ? icon : <TooltipIcon />}</span>
      {isTextVisible && <span className={styles.text}>{text}</span>}
    </span>
  );
};
