import { useEffect, useState } from 'react';

import { getTeacherById } from '@/api/mock-api';
import type { TeacherType } from '@/types/teacher';

import styles from './teacher-modal-content.module.scss';

interface TeacherModalProps {
  teacherId: number;
}

export const TeacherModalContent = ({teacherId}:TeacherModalProps) => {
  const [teacherContent, setTeacherContent] = useState<TeacherType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTeacherById(teacherId)
      // then вызывается на fulfilled
      .then((data) => { // в коллбэке можно получить то, что вернулось из запроса
        setError(false); // т.к. запрос успешен, надо обязательно занулить ошибку
        setTeacherContent(data); // и положить данные из запроса в стор
      })
      // catch вызывается на rejected
      .catch((reject: string) => { // в зависимости от конфигурации ошибка может быть разной
        setError(true); // обязательно состояние ошибки в true
        console.log(reject); // как-то логаем ошибку
      })
      // finally вызывается в любом случае всегда после окончания работы промиса
      .finally(() => setIsLoading(false)); // зануляем состояние загрузки
  }, [teacherId]);

  return (
    <div className={styles.teacherModalContent}>
      {isLoading && <div className={styles.loading}>Загружаю...</div>}
      {error && <div className={styles.error}>Такого преподавателя не найдено</div>}
      {teacherContent && (
        <div>
          <h3>{teacherContent.name}</h3>
          <p>{teacherContent.description}</p>
        </div>
      )};
    </div>
  )
}