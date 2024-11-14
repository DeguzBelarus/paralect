import { useAppDispatch, useAppSelector } from 'redux/hooks';

import {
  createOneReplyAsync,
  deleteOneReplyAsync,
  getAllRepliesAsync,
  updateOneReplyAsync,
} from '../mainThunks';
import { getCurrentlyEditingReply, getNewReplyData } from 'redux/slices/main/exports';
import { IRepliesResponseData } from '../types';
import { useModalWindow } from 'pages/MainPage/components/RepliesWrapper/components/ModalWindow/hooks/useModalWindow';

export const useThunks = () => {
  const dispatch = useAppDispatch();
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const newReplyData = useAppSelector(getNewReplyData);
  const { closeModalWindow } = useModalWindow();
  const getAllReplies = () => dispatch(getAllRepliesAsync());
  const createOneReply = async () => {
    const result = await dispatch(createOneReplyAsync(newReplyData));
    const payload = result.payload as IRepliesResponseData;
    payload && payload?.data && closeModalWindow();
  };
  const updateOneReply = (_id: string) =>
    dispatch(updateOneReplyAsync({ _id, dto: currentlyEditingReply }));
  const deleteOneReply = (_id: string) => dispatch(deleteOneReplyAsync({ _id }));
  return { getAllReplies, createOneReply, updateOneReply, deleteOneReply };
};
