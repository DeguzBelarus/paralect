import { FC } from 'react';

import { RepliesWrapperUpperContainer } from './RepliesWrapperUpperContainer/RepliesWrapperUpperContainer';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { RepliesContainer } from './components/RepliesContainer/RepliesContainer';
import styles from './RepliesWrapper.module.scss';

export const RepliesWrapper: FC = () => {
  return (
    <div className={styles.RepliesWrapper}>
      <ModalWindow />
      <RepliesWrapperUpperContainer />
      <RepliesContainer />
    </div>
  );
};
