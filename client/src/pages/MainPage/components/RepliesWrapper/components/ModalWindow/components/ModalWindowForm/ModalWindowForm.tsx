import { FC } from 'react';

import { ReplyDataInput } from './components/ReplyDataInput/ReplyDataInput';
import { ValidationInfo } from './components/ValidationInfo/ValidationInfo';
import styles from './ModalWindowForm.module.scss';

export const ModalWindowForm: FC = () => {
  return (
    <form className={styles.ModalWindowForm}>
      <ReplyDataInput type="status" />
      <ReplyDataInput type="company" />
      <ReplyDataInput type="position" />
      <ReplyDataInput type="note" />
      <ReplyDataInput type="salaryFork" />
      <ValidationInfo />
    </form>
  );
};
