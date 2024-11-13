import { RootState } from 'redux/store';

import { mainSlice } from './mainSlice';

// setters
export const {
  actions: { setServerReadyState },
} = mainSlice;

// getters
export const getServerReadyState = ({ main: { serverReadyState } }: RootState) => serverReadyState;
