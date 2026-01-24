import { forwardRef, type InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  additionalClassname?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, additionalClassname, ...rest }, refInput) => {
    const inputId = rest.id || rest.name;
    const createClassname = () => {
      const baseClassname = `${styles.input}`;

      if (additionalClassname) {
        return `${baseClassname} ${additionalClassname}`;
      }

      if (error) {
        return `${baseClassname} ${styles.error}`;
      }

      return baseClassname;
    };

    return (
      <div className={styles.inputWrapper}>
        {Boolean(rest.label) && (
          <label className={styles.label} htmlFor={inputId}>
            {rest.label}
          </label>
        )}
        <input id={inputId} className={createClassname()} ref={refInput} {...rest} />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
