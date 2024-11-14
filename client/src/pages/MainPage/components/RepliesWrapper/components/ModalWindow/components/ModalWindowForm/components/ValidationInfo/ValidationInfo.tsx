import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';

import { getValidationErrorMessage } from 'redux/slices/main/exports';
import styles from './ValidationInfo.module.scss';

export const ValidationInfo: FC = () => {
  const validationErrorMessage = useAppSelector(getValidationErrorMessage);
  return (
    <div className={styles.ValidationInfo}>
      <p>{validationErrorMessage}</p>
    </div>
  );
};
