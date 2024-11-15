import { RootState } from 'redux/store';

import { mainSlice } from './mainSlice';

// setters
export const {
  actions: {
    setReplies,
    setCurrentlyEditingReply,
    setIsModalWindowOpenedForCreation,
    setNewReplyData,
    setIsNewReplyStatusSelected,
    setValidationErrorMessage,
  },
} = mainSlice;

// getters
export const getRequestStatus = ({ main: { requestStatus } }: RootState) => requestStatus;
export const getReplies = ({ main: { replies } }: RootState) => replies;
export const getIsModalWindowOpenedForCreation = ({
  main: { isModalWindowOpenedForCreation },
}: RootState) => isModalWindowOpenedForCreation;
export const getCurrentlyEditingReply = ({ main: { currentlyEditingReply } }: RootState) =>
  currentlyEditingReply;
export const getNewReplyData = ({ main: { newReplyData } }: RootState) => newReplyData;
export const getIsNewReplyStatusSelected = ({ main: { isNewReplyStatusSelected } }: RootState) =>
  isNewReplyStatusSelected;
export const getValidationErrorMessage = ({ main: { validationErrorMessage } }: RootState) =>
  validationErrorMessage;
