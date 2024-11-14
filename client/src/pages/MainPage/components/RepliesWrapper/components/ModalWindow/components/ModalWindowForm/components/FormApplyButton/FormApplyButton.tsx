import { FC } from 'react';

import { useAppSelector } from 'redux/hooks';
import { getValidationErrorMessage } from 'redux/slices/main/exports';
import styles from './FormApplyButton.module.scss';

interface Props {
  applyButtonText: string;
}

export const FormApplyButton: FC<Props> = ({ applyButtonText }) => {
  const validationErrorMessage = useAppSelector(getValidationErrorMessage);
  return (
    <button type="submit" disabled={!!validationErrorMessage} className={styles.FormApplyButton}>
      <span>{applyButtonText}</span>
    </button>
  );
};
