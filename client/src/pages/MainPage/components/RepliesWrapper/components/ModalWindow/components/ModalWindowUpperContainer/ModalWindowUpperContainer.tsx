import { FC, memo } from 'react';

import { CloseModalWindowButton } from './CloseModalWindowButton/CloseModalWindowButton';
import styles from './ModalWindowUpperContainer.module.scss';

interface Props {
  isModalInEditingMode: boolean;
}

export const ModalWindowUpperContainer: FC<Props> = memo(({ isModalInEditingMode }) => {
  const modalWindowHeadingText = isModalInEditingMode
    ? 'Editing of a reply'
    : 'Creation of a reply';
  return (
    <div className={styles.ModalWindowUpperContainer}>
      <h2>{modalWindowHeadingText}</h2>
      <CloseModalWindowButton />
    </div>
  );
});
