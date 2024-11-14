import { SYSTEM_MESSAGE_DATA_DEFAULTS } from 'redux/constants';
import { IMainState } from './types';

export const MAIN_SLICE_INITIAL_STATE: IMainState = {
  requestStatus: 'idle',
  replies: [],
  systemMessage: SYSTEM_MESSAGE_DATA_DEFAULTS,
  currentlyEditingReply: null,
  isModalWindowOpenedForCreation: false,
};
