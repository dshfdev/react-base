import { Link } from 'react-router-dom';

import { Container } from '@/components/container';

import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.subtitle}>Страница не найдена</p>
          <p className={styles.description}>
            К сожалению, запрашиваемая страница не существует или была удалена.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.action}>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
