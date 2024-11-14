import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import {
  getCurrentlyEditingReply,
  getNewReplyData,
  setCurrentlyEditingReply,
  setIsNewReplyStatusSelected,
  setNewReplyData,
} from 'redux/slices/main/exports';
import { ReplyDataInputType, ReplyStatusType } from 'types/types';

export const useReply = (type: ReplyDataInputType) => {
  const dispatch = useAppDispatch();
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const newReplyData = useAppSelector(getNewReplyData);
  const replyData = currentlyEditingReply ? currentlyEditingReply : newReplyData;
  const replyUpdatingMethod = currentlyEditingReply ? setCurrentlyEditingReply : setNewReplyData;
  const replyDataInputValue = currentlyEditingReply
    ? currentlyEditingReply[type]
    : newReplyData[type];
  const replyDataInputValueForSelect = currentlyEditingReply ? replyDataInputValue : undefined;
  const replyStatusesArray: Array<ReplyStatusType> = ['accepted', 'refused', 'waiting'];

  const replyDataStateUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(replyUpdatingMethod({ ...replyData, [name]: value }));
  };
  const replyDataStateUpdateTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch(replyUpdatingMethod({ ...replyData, [name]: value }));
  };
  const replyDataStateUpdateForSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    !currentlyEditingReply && dispatch(setIsNewReplyStatusSelected(true));
    dispatch(replyUpdatingMethod({ ...replyData, status: value as ReplyStatusType }));
  };
  return {
    replyDataStateUpdate,
    replyDataInputValue,
    replyDataStateUpdateTextarea,
    replyStatusesArray,
    replyDataStateUpdateForSelect,
    replyDataInputValueForSelect,
    currentlyEditingReply,
    newReplyData,
  };
};
