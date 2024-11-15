import { FC, memo, useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';

import { getReplies } from 'redux/slices/main/exports';
import { useThunks } from 'redux/thunks/hooks/useThunks';
import { ReplyItem } from './components/ReplyItem/ReplyItem';
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
      <ReplyItem mode="table-head" />
      {replies?.length
        ? replies.map((replYData) => {
            const { _id } = replYData;
            return <ReplyItem mode="table-row" data={replYData} key={_id} />;
          })
        : null}
    </div>
  );
});
