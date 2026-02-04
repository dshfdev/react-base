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
    <div className={styles.tabs} role="tablist">
      {tabs.map(({ value, label }, index) => (
        <Button
          key={value}
          className={createTabClassname(value)}
          onClick={createTabClickHandler(tabs[index])}
          role="tab"
          type="button"
          aria-selected={value === activeTab.value}
          aria-controls={`tab panel-${value}`}
          id={`tab-${value}`}
          tabIndex={value === activeTab.value ? 0 : -1}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
