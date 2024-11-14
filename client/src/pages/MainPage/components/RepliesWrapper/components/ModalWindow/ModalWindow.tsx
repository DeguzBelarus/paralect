import { FC, memo } from 'react';

import { useModalWindow } from 'pages/MainPage/components/RepliesWrapper/components/ModalWindow/hooks/useModalWindow';
import { ModalWindowUpperContainer } from './components/ModalWindowUpperContainer/ModalWindowUpperContainer';
import { ModalWindowForm } from './components/ModalWindowForm/ModalWindowForm';
import styles from './ModalWindow.module.scss';

export const ModalWindow: FC = memo(() => {
  const { isModalWindShown, isModalInEditingMode } = useModalWindow();
  if (!isModalWindShown) return null;
  return (
    <div className={styles.ModalWindow}>
      <ModalWindowUpperContainer isModalInEditingMode={isModalInEditingMode} />
      <ModalWindowForm />
    </div>
  );
});
