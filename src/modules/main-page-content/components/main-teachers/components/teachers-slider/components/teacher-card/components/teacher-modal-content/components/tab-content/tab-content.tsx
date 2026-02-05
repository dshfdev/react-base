import styles from './tab-content.module.scss';

interface TabContentProps {
  title?: string;
  text: string[];
}

export const TabContent = ({ title, text }: TabContentProps) => {
  return (
    <div className={styles.tabContent}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <p className={styles.text}>
        {text.map((itemText, index) => {
          return <p key={index}>{itemText}</p>;
        })}
      </p>
    </div>
  );
};
