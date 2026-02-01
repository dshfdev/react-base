import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import type { TeacherType } from '@/types/teacher';

import { TabContent } from '../tab-content/tab-content';

import styles from './teacher-info.module.scss';

interface TeacherModalProps {
  teacherContent: TeacherType;
}

export const TeacherInfo = ({
  teacherContent: { name, imageSrc, description, links, tabs },
}: TeacherModalProps) => {
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].data);

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
      <div className={styles.teacherTabContent}>
        {activeTabContent.map((tab, index) => (
          <TabContent key={index} title={tab.title} text={tab.text} />
        ))}
        <div className={styles.teacherTabEnd}></div>
      </div>
    </div>
  );
};
