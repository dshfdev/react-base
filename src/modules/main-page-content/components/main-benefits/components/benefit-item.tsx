import { Tooltip } from '@/components/tooltip';
import { type BenefitItemType } from '@/types/benefits';

import styles from './benefit-item.module.scss';

interface BenefitItemProps {
  benefitItem: BenefitItemType;
}

export const BenefitItem = ({
  benefitItem: { subtitle, description, tooltip },
}: BenefitItemProps) => {
  return (
    <div className={styles.benefitItem}>
      <h3 className={styles.title}>
        {subtitle}
        {tooltip && <Tooltip text={tooltip} />}
      </h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
};
