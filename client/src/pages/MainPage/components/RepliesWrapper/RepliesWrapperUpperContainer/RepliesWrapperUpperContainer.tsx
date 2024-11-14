import { FC } from 'react';

import { OpenModalForCreationButton } from './components/OpenModalForCreationButton/OpenModalForCreationButton';
import { useModalWindow } from '../components/ModalWindow/hooks/useModalWindow';
import styles from './RepliesWrapperUpperContainer.module.scss';

export const RepliesWrapperUpperContainer: FC = () => {
  const { isModalWindShown } = useModalWindow();
  return (
    <div className={styles.RepliesWrapperUpperContainer}>
      <h1>My replies</h1>
      {!isModalWindShown && <OpenModalForCreationButton />}
    </div>
  );
};
