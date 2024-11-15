import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';

import { useThunks } from 'redux/thunks/hooks/useThunks';
import { getRequestStatus } from 'redux/slices/main/exports';
import styles from './DeleteReplyButton.module.scss';
import { classNames } from 'helpers/classNames';

interface Props {
  id: string;
}

export const DeleteReplyButton: FC<Props> = ({ id }) => {
  const { deleteOneReply } = useThunks();
  const isLoading = useAppSelector(getRequestStatus) === 'loading';

  const handleDeleteClick = () => {
    if (isLoading) return;
    deleteOneReply(id);
  };
  return (
    <div
      className={classNames(styles.DeleteReplyButton, [], { [styles.disabled]: isLoading })}
      role="button"
      onClick={handleDeleteClick}
    >
      <span>&times;</span>
    </div>
  );
};
