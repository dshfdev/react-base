import { useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { useOutsideClick } from '@/hooks/use-outside-click';
import type { Option } from '@/types/select-option';

import styles from './select.module.scss';

interface SelectProps {
  options: Option[];
  value: Option;
  // eslint-disable-next-line no-unused-vars
  onChange: (option: Option) => void;
  additionalClassname?: string;
}

export const Select = ({ options, value, onChange, additionalClassname }: SelectProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  const handleSelectClickBtn = () => {
    if (!isSelectOpen) {
      handleSelectOpen();
      return;
    }
    handleSelectClose();
  };

  const createOptionSelectHandler = (option: Option) => () => {
    onChange(option);
    handleSelectClose();
  };

  useOutsideClick({
    ref: selectRef,
    handler: handleSelectClose,
    condition: isSelectOpen,
  });

  const createSelectClassname = `${styles.select} ${additionalClassname ? additionalClassname : ''}`;

  const createIconClassname = `${styles.icon} ${isSelectOpen ? styles.iconOpen : ''}`;

  const createOptionClassname = (optionValue: string) => {
    return `${styles.option} ${optionValue === value.value ? styles.active : ''}`;
  };

  return (
    <div className={createSelectClassname} ref={selectRef}>
      <Button
        variant="text"
        additionalClassname={styles.selectBtn}
        onClick={handleSelectClickBtn}
        type="button"
        aria-controls="custom-select-listbox"
        id="custom-select-button"
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
      >
        {value.label}
        <span className={createIconClassname}>
          <ArrowDownIcon />
        </span>
      </Button>

      {isSelectOpen && (
        <div
          className={styles.selectOptions}
          id="custom-select-listbox"
          role="listbox"
          aria-labelledby="custom-select-button"
        >
          {options.map((option) => (
            <Button
              variant="text"
              key={option.value}
              onClick={createOptionSelectHandler(option)}
              additionalClassname={createOptionClassname(option.value)}
              type="button"
              role="option"
              aria-selected={option.value === value.value}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
