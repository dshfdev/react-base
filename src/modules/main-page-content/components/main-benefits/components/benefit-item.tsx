import { Tooltip } from '@/components/tooltip';
import { type BenefitItemType } from '@/types/benefits';

import styles from './benefit-item.module.scss';

interface BenefitItemProps {
  benefitProps: BenefitItemType;
}

export const BenefitItem = ({ benefitProps }: BenefitItemProps) => {
  return (
    <div className={styles.benefitItem}>
      <h3 className={styles.title}>
        {benefitProps.subtitle}
        {benefitProps.tooltip && <Tooltip text={benefitProps.tooltip} />}
      </h3>

      <p className={styles.description}>{benefitProps.description}</p>
    </div>
  );
};
