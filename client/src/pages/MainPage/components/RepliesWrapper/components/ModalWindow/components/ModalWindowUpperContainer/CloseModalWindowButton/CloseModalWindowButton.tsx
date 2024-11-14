import { FC, memo } from 'react';

import { useModalWindow } from 'pages/MainPage/components/RepliesWrapper/components/ModalWindow/hooks/useModalWindow';
import styles from './CloseModalWindowButton.module.scss';

export const CloseModalWindowButton: FC = memo(() => {
  const { closeModalWindow } = useModalWindow();
  return (
    <div className={styles.CloseModalWindowButton} role="button" onClick={closeModalWindow}>
      <h2>&times;</h2>
    </div>
  );
});
