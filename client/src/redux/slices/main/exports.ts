import { RootState } from 'redux/store';

import { mainSlice } from './mainSlice';

// setters
export const {
  actions: {
    setSystemMessage,
    setReplies,
    setCurrentlyEditingReply,
    setIsModalWindowOpenedForCreation,
  },
} = mainSlice;

// getters
export const getRequestStatus = ({ main: { requestStatus } }: RootState) => requestStatus;
export const getReplies = ({ main: { replies } }: RootState) => replies;
export const getSystemMessage = ({ main: { systemMessage } }: RootState) => systemMessage;
export const getCurrentlyEditingReply = ({ main: { currentlyEditingReply } }: RootState) =>
  currentlyEditingReply;
export const getIsModalWindowOpenedForCreation = ({
  main: { isModalWindowOpenedForCreation },
}: RootState) => isModalWindowOpenedForCreation;
