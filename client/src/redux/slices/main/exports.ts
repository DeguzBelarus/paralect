import { RootState } from 'redux/store';

import { mainSlice } from './mainSlice';

// setters
export const {
  actions: { setServerReadyState, setReplies },
} = mainSlice;

// getters
export const getServerReadyState = ({ main: { serverReadyState } }: RootState) => serverReadyState;
export const getReplies = ({ main: { replies } }: RootState) => replies;
