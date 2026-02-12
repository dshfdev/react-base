import { useNavigate } from 'react-router-dom';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-card.module.scss';

interface TeacherCardProps {
  teacherCard: TeacherListType;
}

export const TeacherCard = ({
  teacherCard: { id, name, imageSrc, description },
}: TeacherCardProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/teacher/${id}`, { preventScrollReset: true });
  };

  return (
    <div className={styles.teacherCard}>
      <img
        src={teachersImages[imageSrc]}
        alt={`${name}, ${description}`}
        className={styles.image}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button onClick={handleButtonClick} variant="text" additionalClassname={styles.button}>
        Подробнее
      </Button>
    </div>
  );
};
