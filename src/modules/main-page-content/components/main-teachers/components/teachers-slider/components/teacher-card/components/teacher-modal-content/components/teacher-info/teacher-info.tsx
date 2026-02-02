import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import { Tabs } from '@/components/tabs';
import type { Option } from '@/types/select-option';
import type { TeacherType } from '@/types/teacher';

import { TabContent } from '../tab-content/tab-content';

import styles from './teacher-info.module.scss';

interface TeacherModalProps {
  teacherContent: TeacherType;
}

export const TeacherInfo = ({
  teacherContent: { name, imageSrc, description, links, tabs },
}: TeacherModalProps) => {
  // сразу же высчитываем массив опций
  const tabsOptions: Option[] = tabs.map((tab) => {
    return { value: tab.name, label: tab.title };
  });

  // храним состояния
  const [activeTab, setActiveTab] = useState(tabsOptions[0]);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].data);

  // по клику на таб устанавливаем активный таб и контент
  const onTabClickHandler = (value: Option) => {
    setActiveTab(value);
    setActiveTabContent(createActiveTab(value));
  };

  // просто функция для пересчета значения таба
  const createActiveTab = (value: Option) => {
    const activeTab = tabs.find((tab) => {
      return tab.name === value.value;
    });

    if (!activeTab) {
      return activeTabContent;
    }

    return activeTab.data;
  };

  return (
    <div className={styles.teacherInfo}>
      <div className={styles.teacherTopContent}>
        <img className={styles.img} src={teachersImages[imageSrc]} alt={name} />
        <div className={styles.teacherTop}>
          <span className={styles.name}>{name}</span>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            {links.map((link, index) => (
              <Link href={link.href} key={index} additionalClassname={styles.link}>
                <img src={link.imagePath} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Tabs tabs={tabsOptions} activeTab={activeTab} onTabClick={onTabClickHandler} />
      <div className={styles.teacherTabContent}>
        {activeTabContent.map((tab, index) => (
          <TabContent key={index} title={tab.title} text={tab.text} />
        ))}
        <div className={styles.teacherTabEnd}></div>
      </div>
    </div>
  );
};
