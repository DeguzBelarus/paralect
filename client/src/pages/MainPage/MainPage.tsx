import { FC, memo } from 'react';

import { ParalectLogo } from './components/ParalectLogo/ParalectLogo';
import { RepliesWrapper } from './components/RepliesWrapper/RepliesWrapper';
import styles from './MainPage.module.scss';

export const MainPage: FC = memo(() => {
  return (
    <main className={styles.MainPage}>
      <ParalectLogo />
      <RepliesWrapper />
    </main>
  );
});
