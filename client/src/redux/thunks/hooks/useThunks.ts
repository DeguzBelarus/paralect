import { useAppDispatch } from 'redux/hooks';

import {
  createOneReplyAsync,
  deleteOneReplyAsync,
  getAllRepliesAsync,
  updateOneReplyAsync,
} from '../mainThunks';
import {
  CreateReplyDto,
  IGeneralUpdateAndDeleteRequest,
  IUpdateOneReplyRequestData,
} from '../types';

export const useThunks = () => {
  const dispatch = useAppDispatch();
  const getAllReplies = () => dispatch(getAllRepliesAsync());
  const createOneReply = (createOneReplyDto: CreateReplyDto) =>
    dispatch(createOneReplyAsync(createOneReplyDto));
  const updateOneReply = (requestData: IUpdateOneReplyRequestData) =>
    dispatch(updateOneReplyAsync(requestData));
  const deleteOneReply = (requestData: IGeneralUpdateAndDeleteRequest) =>
    dispatch(deleteOneReplyAsync(requestData));
  return { getAllReplies, createOneReply, updateOneReply, deleteOneReply };
};
