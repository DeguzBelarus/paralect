import { NEW_REPLY_DATA_DEFAULTS, SYSTEM_MESSAGE_DATA_DEFAULTS } from 'redux/constants';
import { IMainState } from './types';
import { EMPTY_STRING } from 'constants/constants';

export const MAIN_SLICE_INITIAL_STATE: IMainState = {
  requestStatus: 'idle',
  replies: [],
  systemMessage: SYSTEM_MESSAGE_DATA_DEFAULTS,
  isModalWindowOpenedForCreation: false,
  currentlyEditingReply: null,
  newReplyData: NEW_REPLY_DATA_DEFAULTS,
  isNewReplyStatusSelected: false,
  validationErrorMessage: EMPTY_STRING,
};
