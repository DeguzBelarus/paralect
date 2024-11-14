import { FC } from 'react';

import { ReplyDataInputType } from 'types/types';
import { useReply } from '../../hooks/useReply';
import { getReplyDataInputPlaceholder } from './utils';
import styles from './ReplyDataInput.module.scss';

interface Props {
  type: ReplyDataInputType;
}

export const ReplyDataInput: FC<Props> = ({ type }) => {
  const isStatusInput = type === 'status';
  const isSalaryForkInput = type === 'salaryFork';
  const isNoteInput = type === 'note';
  const placeholder = getReplyDataInputPlaceholder(type);
  const {
    replyDataStateUpdate,
    replyDataInputValue,
    replyDataStateUpdateTextarea,
    replyStatusesArray,
    replyDataStateUpdateForSelect,
    replyDataInputValueForSelect,
  } = useReply(type);
  return (
    <div className={styles.ReplyDataInput}>
      {!isStatusInput && !isSalaryForkInput && !isNoteInput && (
        <input
          type="text"
          spellCheck={false}
          placeholder={placeholder}
          name={type}
          onChange={replyDataStateUpdate}
          value={replyDataInputValue}
        />
      )}
      {isSalaryForkInput && (
        <>
          <span>Specify the salary fork in dollars:</span>
          <input
            type="number"
            name={type}
            onChange={replyDataStateUpdate}
            value={replyDataInputValue}
          />
        </>
      )}
      {isNoteInput && (
        <textarea
          spellCheck={false}
          placeholder={placeholder}
          name={type}
          onChange={replyDataStateUpdateTextarea}
          value={replyDataInputValue}
        />
      )}
      {isStatusInput && (
        <select
          onChange={replyDataStateUpdateForSelect}
          defaultValue={replyDataInputValueForSelect}
        >
          <option disabled selected>
            -- select the reply status --
          </option>
          {replyStatusesArray.map((replyStatus, index) => {
            return (
              <option key={index} value={replyStatus}>
                {replyStatus}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};
