import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { useModalWindow } from '../../../../../hooks/useModalWindow';
import {
  getCurrentlyEditingReply,
  getIsNewReplyStatusSelected,
  getNewReplyData,
  setValidationErrorMessage,
} from 'redux/slices/main/exports';
import { useEffect } from 'react';
import { REPLY_NOTE_MAXIMUM_LENGTH } from '../constants';

export const useValidate = () => {
  const dispatch = useAppDispatch();
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const newReplyData = useAppSelector(getNewReplyData);
  const isNewReplyStatusSelected = useAppSelector(getIsNewReplyStatusSelected);
  const { isModalInEditingMode } = useModalWindow();
  const validatedReplyData = isModalInEditingMode ? currentlyEditingReply : newReplyData;
  const { company, position, salaryFork, status, note } = validatedReplyData;
  const validationError = (() => {
    if ((!isModalInEditingMode && !isNewReplyStatusSelected) || !status) {
      return 'The response status must be specified';
    }
    if (!company) {
      return 'The company name must be specified';
    }
    if (!position) {
      return 'The position name must be specified';
    }
    if (note && note.length > REPLY_NOTE_MAXIMUM_LENGTH) {
      return `The note cannot be longer than ${REPLY_NOTE_MAXIMUM_LENGTH} characters`;
    }
    if (!Number(salaryFork)) {
      return 'It is necessary to specify the size of the salary fork';
    }
  })();
  useEffect(() => {
    dispatch(setValidationErrorMessage(validationError));
  }, [dispatch, validationError]);
};
