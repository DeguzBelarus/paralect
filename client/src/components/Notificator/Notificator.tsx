import { FC } from 'react';

import { Loader } from './components/Loader/Loader';
import styles from './Notificator.module.scss';

export const Notificator: FC = () => {
  return (
    <div className={styles.Notificator}>
      <Loader />
    </div>
  );
};
