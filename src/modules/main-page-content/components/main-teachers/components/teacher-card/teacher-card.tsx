import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-card.module.scss';

interface TeacherCardProps {
  teacherCard: TeacherListType;
}

export const TeacherCard = ({ teacherCard: { name, imageSrc, description } }: TeacherCardProps) => {
  return (
    <div className={styles.teacherCard}>
      <img
        src={teachersImages[imageSrc]}
        alt={`${name}, ${description}`}
        className={styles.image}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button variant="text" additionalClassname={styles.button}>
        Подробнее
      </Button>
    </div>
  );
};
