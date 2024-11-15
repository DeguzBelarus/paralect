import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';

import {
  getCurrentlyEditingReply,
  getReplies,
  getRequestStatus,
  getValidationErrorMessage,
} from 'redux/slices/main/exports';
import { useModalWindow } from '../../../../hooks/useModalWindow';
import { areObjectsEqual } from 'utils/areObjectsEqual';
import styles from './FormApplyButton.module.scss';

interface Props {
  applyButtonText: string;
}

export const FormApplyButton: FC<Props> = ({ applyButtonText }) => {
  const { isModalInEditingMode } = useModalWindow();
  const isLoading = useAppSelector(getRequestStatus) === 'loading';
  const validationErrorMessage = useAppSelector(getValidationErrorMessage);
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const replies = useAppSelector(getReplies);
  const foundCurrentlyEditingReply = replies.find(
    (reply) => reply?._id === currentlyEditingReply?._id,
  );
  const isCurrentlyEditingReplyChanged = !areObjectsEqual(
    foundCurrentlyEditingReply,
    currentlyEditingReply,
  );
  const isDisabled = !isModalInEditingMode
    ? !!validationErrorMessage
    : !!validationErrorMessage || !isCurrentlyEditingReplyChanged;
  return (
    <button type="submit" disabled={isDisabled || isLoading} className={styles.FormApplyButton}>
      <span>{applyButtonText}</span>
    </button>
  );
};
