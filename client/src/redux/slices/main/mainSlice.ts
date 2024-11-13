import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MAIN_SLICE_INITIAL_STATE } from './initialState';
import { IMainState } from './types';
import { ServerReadyState } from 'redux/types';

export const mainSlice = createSlice({
  name: 'main',
  initialState: MAIN_SLICE_INITIAL_STATE,
  reducers: {
    setServerReadyState(state: IMainState, { payload }: PayloadAction<ServerReadyState>) {
      state.serverReadyState = payload;
    },
  },
});

export const { reducer } = mainSlice;
