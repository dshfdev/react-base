import { Button } from '@/components/button';
import type { Option } from '@/types/select-option';

import styles from './tabs.module.scss';

interface TabsProps {
  tabs: Option[];
  activeTab: Option;
  // eslint-disable-next-line no-unused-vars
  onTabClick: (option: Option) => void;
  additionalClassname?: string;
}

export const Tabs = ({ tabs, activeTab, onTabClick, additionalClassname }: TabsProps) => {
  const createTabClassname = (value: string) => {
    const baseTabClass = styles.tabBtn;
    const activeTabClass = value === activeTab.value ? styles.active : '';
    return [baseTabClass, activeTabClass, additionalClassname].filter(Boolean).join(' ');
  };

  const createTabClickHandler = (option: Option) => () => {
    onTabClick(option);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((option) => (
        <Button
          key={option.value}
          className={createTabClassname(option.value)}
          onClick={createTabClickHandler(option)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
