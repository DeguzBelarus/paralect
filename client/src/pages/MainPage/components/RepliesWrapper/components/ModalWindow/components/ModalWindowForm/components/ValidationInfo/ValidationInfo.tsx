import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';

import { getValidationErrorMessage } from 'redux/slices/main/exports';
import { useValidate } from './hooks/useValidate';
import styles from './ValidationInfo.module.scss';

export const ValidationInfo: FC = () => {
  const validationErrorMessage = useAppSelector(getValidationErrorMessage);
  useValidate();
  return (
    <div className={styles.ValidationInfo}>
      <p>
        <span>{validationErrorMessage}</span>
      </p>
    </div>
  );
};
