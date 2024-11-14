import { FC, memo, useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';

import { getReplies } from 'redux/slices/main/exports';
import { useThunks } from 'redux/thunks/hooks/useThunks';
import styles from './RepliesContainer.module.scss';

export const RepliesContainer: FC = memo(() => {
  const { getAllReplies } = useThunks();
  const replies = useAppSelector(getReplies);
  useEffect(() => {
    getAllReplies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.RepliesContainer}>
      {replies?.length
        ? replies.map((replYData) => {
            const { _id, company } = replYData;
            return <p key={_id}>{company}</p>;
          })
        : null}
    </div>
  );
});
