import { NEW_REPLY_DATA_DEFAULTS } from 'redux/constants';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import {
  getCurrentlyEditingReply,
  getIsModalWindowOpenedForCreation,
  setCurrentlyEditingReply,
  setIsModalWindowOpenedForCreation,
  setIsNewReplyStatusSelected,
  setNewReplyData,
} from 'redux/slices/main/exports';
import { IReply } from 'types/types';

export const useModalWindow = () => {
  const dispatch = useAppDispatch();
  const isModalWindowOpenedForCreation = useAppSelector(getIsModalWindowOpenedForCreation);
  const currentlyEditingReply = useAppSelector(getCurrentlyEditingReply);
  const isModalWindShown = isModalWindowOpenedForCreation || currentlyEditingReply;
  const isModalInEditingMode = !!currentlyEditingReply;
  const openModalForCreationReply = () => {
    dispatch(setIsModalWindowOpenedForCreation(true));
  };
  const openModalForEditing = (replyData: IReply) => {
    dispatch(setCurrentlyEditingReply(replyData));
  };
  const closeModalWindow = () => {
    dispatch(setIsModalWindowOpenedForCreation(false));
    dispatch(setCurrentlyEditingReply(null));
    dispatch(setNewReplyData(NEW_REPLY_DATA_DEFAULTS));
    dispatch(setIsNewReplyStatusSelected(false));
  };
  return {
    isModalInEditingMode,
    isModalWindShown,
    openModalForCreationReply,
    openModalForEditing,
    closeModalWindow,
    isModalWindowOpenedForCreation,
  };
};
