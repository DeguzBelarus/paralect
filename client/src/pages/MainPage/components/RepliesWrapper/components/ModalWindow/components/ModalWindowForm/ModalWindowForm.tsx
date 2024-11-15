import { FC, FormEvent } from 'react';

import { ReplyDataInput } from './components/ReplyDataInput/ReplyDataInput';
import { ValidationInfo } from './components/ValidationInfo/ValidationInfo';
import { FormApplyButton } from './components/FormApplyButton/FormApplyButton';
import { useModalWindow } from '../../hooks/useModalWindow';
import { useThunks } from 'redux/thunks/hooks/useThunks';
import styles from './ModalWindowForm.module.scss';

export const ModalWindowForm: FC = () => {
  const { isModalInEditingMode } = useModalWindow();
  const { createOneReply, updateOneReply } = useThunks();
  const applyButtonText = isModalInEditingMode ? 'Update' : 'Create';

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    !isModalInEditingMode && createOneReply();
    isModalInEditingMode && updateOneReply();
  };
  return (
    <form className={styles.ModalWindowForm} onSubmit={formSubmitHandler}>
      <ReplyDataInput type="status" />
      <ReplyDataInput type="company" />
      <ReplyDataInput type="position" />
      <ReplyDataInput type="note" />
      <ReplyDataInput type="salaryFork" />
      <ValidationInfo />
      <FormApplyButton applyButtonText={applyButtonText} />
    </form>
  );
};
