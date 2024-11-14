import { useAppDispatch, useAppSelector } from 'redux/hooks';

import {
  createOneReplyAsync,
  deleteOneReplyAsync,
  getAllRepliesAsync,
  updateOneReplyAsync,
} from '../mainThunks';
import { getCurrentlyEditingReply, getNewReplyData } from 'redux/slices/main/exports';

export const useThunks = () => {
  const dispatch = useAppDispatch();
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const newReplyData = useAppSelector(getNewReplyData);
  const getAllReplies = () => dispatch(getAllRepliesAsync());
  const createOneReply = () => dispatch(createOneReplyAsync(newReplyData));
  const updateOneReply = (_id: string) =>
    dispatch(updateOneReplyAsync({ _id, dto: currentlyEditingReply }));
  const deleteOneReply = (_id: string) => dispatch(deleteOneReplyAsync({ _id }));
  return { getAllReplies, createOneReply, updateOneReply, deleteOneReply };
};
