import { useContext } from 'react';

import { Container } from '@/components/container';
import { MainPageContext } from '@/store/main-page';

import { TeachersSlider } from './components/teachers-slider';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const { teachersList } = useContext(MainPageContext);

  return (
    <section id="teachers" className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <TeachersSlider teachersList={teachersList} />
        </div>
      </Container>
    </section>
  );
};
