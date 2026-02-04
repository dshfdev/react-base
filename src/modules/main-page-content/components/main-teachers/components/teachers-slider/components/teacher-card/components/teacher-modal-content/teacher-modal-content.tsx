import { useEffect, useState } from 'react';

import { getTeacherById } from '@/api/mock-api';
import type { TeacherType } from '@/types/teacher';

import { TeacherInfo } from './components/teacher-info/teacher-info';

import styles from './teacher-modal-content.module.scss';

interface TeacherModalProps {
  teacherId: number;
}

export const TeacherModalContent = ({ teacherId }: TeacherModalProps) => {
  const [teacherContent, setTeacherContent] = useState<TeacherType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTeacherById(teacherId)
      .then((data) => {
        setError(false);
        setTeacherContent(data);
      })
      .catch((reject: string) => {
        setError(true);
        console.log(reject);
      })
      .finally(() => setIsLoading(false));
  }, [teacherId]);

  return (
    <div className={styles.teacherModalContent}>
      {isLoading && <div className={styles.loading}>Загружаю...</div>}
      {error && <div className={styles.error}>Такого преподавателя не найдено</div>}
      {teacherContent && <TeacherInfo teacherContent={teacherContent} />}
    </div>
  );
};
