import { FC } from 'react';

import { OpenModalForCreationButton } from './components/OpenModalForCreationButton/OpenModalForCreationButton';
import styles from './RepliesWrapperUpperContainer.module.scss';

export const RepliesWrapperUpperContainer: FC = () => {
  return (
    <div className={styles.RepliesWrapperUpperContainer}>
      <h1>My replies</h1>
      <OpenModalForCreationButton />
    </div>
  );
};
