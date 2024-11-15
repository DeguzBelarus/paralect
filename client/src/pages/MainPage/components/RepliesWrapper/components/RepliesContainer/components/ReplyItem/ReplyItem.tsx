import { FC } from 'react';
import { useAppDispatch } from 'redux/hooks';

import { ReplyItemCell } from './components/ReplyItemCell/ReplyItemCell';
import { IReply } from 'types/types';
import { classNames } from 'helpers/classNames';
import styles from './ReplyItem.module.scss';
import { setCurrentlyEditingReply } from 'redux/slices/main/exports';

export type ReplyItemMode = 'table-head' | 'table-row';

interface Props {
  mode: ReplyItemMode;
  data?: IReply;
}

export const ReplyItem: FC<Props> = ({ mode, data = {} }) => {
  const dispatch = useAppDispatch();
  const isTableRow = mode === 'table-row';
  const { company, position, salaryFork, status, note } = data;

  const selectReplyForEditing = () => {
    if (!isTableRow) return;
    dispatch(setCurrentlyEditingReply(data as IReply));
  };
  return (
    <div
      className={classNames(styles.ReplyItem, [], { [styles.row]: isTableRow })}
      onClick={selectReplyForEditing}
    >
      <ReplyItemCell mode={mode} type="company" value={company} />
      <ReplyItemCell mode={mode} type="position" value={position} />
      <ReplyItemCell mode={mode} type="fork" value={String(salaryFork)} />
      <ReplyItemCell mode={mode} type="status" value={status} />
      <ReplyItemCell mode={mode} type="note" value={note} />
    </div>
  );
};
