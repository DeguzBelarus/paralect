import { FC } from 'react';

import { classNames } from 'helpers/classNames';
import styles from './ReplyItemCell.module.scss';
import { ReplyItemMode } from '../../ReplyItem';

export type ReplyItemCellType = 'company' | 'position' | 'fork' | 'status' | 'note';

interface Props {
  type: ReplyItemCellType;
  mode: ReplyItemMode;
  value: string;
}

export const ReplyItemCell: FC<Props> = ({ type, value, mode }) => {
  const isCompanyNameCell = type === 'company';
  const isPositionNameCell = type === 'position';
  const isSalaryForkCell = type === 'fork';
  const isStatusCell = type === 'status';
  const isNoteCell = type === 'note';
  const displayingValue = mode === 'table-head' ? type : value;
  return (
    <div
      className={classNames(styles.ReplyItemCell, [], {
        [styles.company]: isCompanyNameCell,
        [styles.position]: isPositionNameCell,
        [styles.salary]: isSalaryForkCell,
        [styles.status]: isStatusCell,
        [styles.note]: isNoteCell,
      })}
    >
      <p>{displayingValue}</p>
    </div>
  );
};
