import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-card.module.scss';

import { TeacherModalContent } from './components/teacher-modal-content/teacher-modal-content';

interface TeacherCardProps {
  teacherCard: TeacherListType;
}

export const TeacherCard = ({ teacherCard: { name, imageSrc, description } }: TeacherCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TeacherModalContent teacherId={999} />
      </Modal>
    </div>
  );
};
