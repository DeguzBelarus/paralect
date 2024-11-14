import { FC } from 'react';

import { useModalWindow } from 'pages/MainPage/components/RepliesWrapper/components/ModalWindow/hooks/useModalWindow';
import styles from './OpenModalForCreationButton.module.scss';

export const OpenModalForCreationButton: FC = () => {
  const { openModalForCreationReply } = useModalWindow();
  return (
    <div
      className={styles.OpenModalForCreationButton}
      role="button"
      onClick={openModalForCreationReply}
    >
      <h2>+</h2>
    </div>
  );
};
